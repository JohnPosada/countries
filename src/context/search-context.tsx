"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { FC, createContext, useState } from "react";

interface SearchContext {
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void;
  debouncedSearchQuery: string;
  regionQuery: string;
  setRegionQuery: (regionQuery: string) => void;
}

export const searchContext = createContext<SearchContext>({
  searchQuery: "",
  setSearchQuery: () => {},
  debouncedSearchQuery: "",
  regionQuery: "",
  setRegionQuery: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const SearchProvider: FC<Props> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [regionQuery, setRegionQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  return (
    <searchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        debouncedSearchQuery,
        regionQuery,
        setRegionQuery,
      }}
    >
      {children}
    </searchContext.Provider>
  );
};
