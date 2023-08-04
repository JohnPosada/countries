import { countriesApi } from "@/api/countries-api";
import { Country } from "@/types/response-country";
import { useQuery } from "@tanstack/react-query";

const getCountryByName = async (name: string) => {
  const { data } = await countriesApi.get<Country[]>(
    `/name/${name}?fields=flags,name,capital,population,region`,
  );
  return data;
};

const getCountryByRegion = async (name: string) => {
  const { data } = await countriesApi.get<Country[]>(
    `/region/${name}?fields=flags,name,capital,population,region`,
  );
  return data;
};

export const useCountry = (name: string = "", region: string = "") => {
  const countryByNameQuery = useQuery(
    ["countryByName", name],
    () => getCountryByName(name),
    {
      retry: 1,
      enabled: name.trim() === "" ? false : true,
    },
  );

  const countryByRegionQuery = useQuery(
    ["countryByRegion", region],
    () => getCountryByRegion(region),
    {
      retry: 1,
      enabled: region.trim() === "" ? false : true,
    },
  );

  return { countryByNameQuery, countryByRegionQuery };
};
