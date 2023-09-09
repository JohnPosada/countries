import { countriesApi } from "@/api/countries-api";
import { NameCountry } from "@/types/response-country";
import { useQuery } from "@tanstack/react-query";

export const getCountryByCode = async (codes: string) => {
  const { data } = await countriesApi.get<NameCountry[]>(
    `/alpha?codes=${codes}&fields=name`,
  );
  return data;
};

export const useBorders = (listBorders: string[]) => {
  const borders = listBorders.join(",");

  const bordersQuery = useQuery(
    ["borders", borders],
    () => getCountryByCode(borders),
    {
      retry: 1,
      enabled: borders.length === 0 ? false : true,
      select: (data) => data.map((country) => country.name.common),
    },
  );

  return { bordersQuery };
};
