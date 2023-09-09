import { Country } from "@/types/response-country";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
interface Props {
  country: Country;
}

export const CardCountry: FC<Props> = ({ country }) => {
  return (
    <Link
      href={`/${country.name.common.toLowerCase().replace(/\s/g, "-")}`}
      className=" flex w-[264px] cursor-pointer flex-col rounded bg-white text-text-darkest-blue shadow dark:bg-dark-blue dark:text-white"
    >
      <Image
        className="h-auto w-full"
        src={country.flags.svg}
        alt={country.flags.alt}
        width={0}
        height={0}
      />
      <div className="flex flex-col justify-center gap-1 p-5 ">
        <h1 className="mb-4 text-xl font-bold">{country.name.common}</h1>
        <p className="text-sm ">
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Region: </span>
          {country.region}
        </p>
        <p className="text-sm ">
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </Link>
  );
};
