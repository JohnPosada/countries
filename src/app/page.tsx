import { InputSearch } from "@/components/input-search";
import { Navbar } from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-light-gray dark:bg-bg-darkest-blue">
      <Navbar />
      <InputSearch />
    </main>
  );
}
