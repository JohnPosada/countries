"use client";

import { searchContext } from "@/context/search-context";
import { useCountries } from "@/hooks/useCountries";
import { useCountry } from "@/hooks/useCountry";
import { Country } from "@/types/response-country";
import { useContext, useEffect } from "react";
import { CardCountry } from "./card-country";
import Spinner from "./spinner";

const ListCountries = () => {
  const { allCountriesQuery } = useCountries();
  const { debouncedSearchQuery, regionQuery } = useContext(searchContext);
  const { countryByNameQuery } = useCountry(debouncedSearchQuery);
  const { countryByRegionQuery } = useCountry("", regionQuery);

  let countries: Country[] = [];

  if (debouncedSearchQuery !== "" && countryByNameQuery.data) {
    countries = countryByNameQuery.data;
  } else if (regionQuery !== "" && countryByRegionQuery.data) {
    countries = countryByRegionQuery.data;
  } else if (allCountriesQuery.data) {
    countries = allCountriesQuery.data;
  }

  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      countryByNameQuery.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchQuery]);

  if (countryByNameQuery.isError) return <h1>Not found</h1>;

  if (allCountriesQuery.isLoading) return <Spinner />;

  return (
    <div className="mt-8 flex flex-col items-center gap-10">
      {countries
        ? countries.map((country) => (
            <CardCountry key={country.name.official} country={country} />
          ))
        : null}
    </div>
  );
};

export default ListCountries;
