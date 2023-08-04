"use client";
import { searchContext } from "@/context/search-context";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";

const optionsRegion = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const SearchForm = () => {
  const { searchQuery, setSearchQuery, regionQuery, setRegionQuery } =
    useContext(searchContext);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setRegionQuery("");
  };

  const onChangeRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionQuery(e.target.value);
    setSearchQuery("");
  };

  return (
    <div className="mt-6 flex w-full flex-col items-center justify-center gap-10 px-4">
      <div className="flex h-12 w-full items-center gap-3 rounded-md bg-white px-4 shadow-md dark:bg-dark-blue dark:text-white">
        <FaSearch className="h-4 w-4 text-dark-gray" />
        <input
          type="text"
          name="search"
          onChange={onChangeSearch}
          value={searchQuery}
          placeholder="Search for a country..."
          className="h-full w-full text-xs text-dark-gray dark:bg-dark-blue dark:text-white "
        />
      </div>
      <div className="flex h-12 w-1/2 items-center self-start rounded-md bg-white px-4 shadow-md dark:bg-dark-blue dark:text-white">
        <select
          className="h-full w-full bg-white text-xs text-dark-gray dark:bg-dark-blue dark:text-white"
          name="region"
          value={regionQuery}
          onChange={onChangeRegion}
        >
          <option value="" disabled>
            Filter by Region
          </option>
          {optionsRegion.map((region) => (
            <option key={region} value={region.toLowerCase()}>
              {region}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
