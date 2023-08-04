import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { countriesApi } from "./../api/countries-api";
import { Country } from "@/types/response-country";

const getAllCountries = async () => {
  const { data } = await countriesApi.get<Country[]>(
    "/all?fields=flags,name,capital,population,region",
  );
  return data;
};

export const useCountries = () => {
  const allCountriesQuery = useQuery(["allCountries"], getAllCountries);
  return { allCountriesQuery };
};
