import ListCountries from "@/components/list-countries";
import { SearchForm } from "@/components/search-form";
import { Navbar } from "@/components/ui/navbar";
import { SearchProvider } from "@/context/search-context";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-light-gray dark:bg-bg-darkest-blue">
      <SearchProvider>
        <Navbar />
        <SearchForm />
        <ListCountries />
      </SearchProvider>
    </main>
  );
}
