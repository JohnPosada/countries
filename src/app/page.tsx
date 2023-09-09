import ListCountries from "@/components/list-countries";
import { SearchForm } from "@/components/search-form";
import { Navbar } from "@/components/ui/navbar";
import { SearchProvider } from "@/context/search-context";

export default function Home() {
  return (
    <>
      <SearchProvider>
        <SearchForm />
        <ListCountries />
      </SearchProvider>
    </>
  );
}
