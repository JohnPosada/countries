import { NativeName } from "./../types/response-country";
import { countriesApi } from "@/api/countries-api";
import { CompleteCountry } from "@/types/response-country";
import { useQuery } from "@tanstack/react-query";

const getCompleteCountryByName = async (name: string) => {
  const { data } = await countriesApi.get<CompleteCountry[]>(
    `/name/${name}?fields=flags,name,capital,population,region,subregion,languages,borders,tld,currencies`,
  );
  return data;
};

const transformCompleteCountry = (country: CompleteCountry) => {
  return {
    name: country.name.common,
    nativeName: Object.values(country.name.nativeName)[0].common,
    capital: country.capital[0],
    population: country.population,
    region: country.region,
    subregion: country.subregion,
    languages: Object.values(country.languages).toString(),
    borders: country.borders,
    flags: country.flags,
    tld: country.tld[0],
    currencies: Object.values(country.currencies)
      .map((currency) => currency.name)
      .toString(),
  };
};

export const useCompleteCountry = (name: string) => {
  const completeCountryByNameQuery = useQuery(
    ["countryByName", name],
    () => getCompleteCountryByName(name),
    {
      select: (data) => transformCompleteCountry(data[0]),
    },
  );

  return { completeCountryByNameQuery };
};
