import { titleDescription } from "@/constants/titleDescription";
import { useBorders } from "@/hooks/useBorders";
import { CountryTransformed } from "@/types/response-country";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import ItemDescription from "./item-description";

interface Props {
  country: CountryTransformed;
}

const DescriptionCountry: FC<Props> = ({ country }) => {
  const { flags, name } = country;
  const { bordersQuery } = useBorders(country.borders);

  return (
    <div className="w-full text-black dark:text-white">
      <Image
        className="h-auto w-full rounded-lg"
        src={flags.svg}
        alt={flags.alt}
        width={0}
        height={0}
      />
      <h1 className="mt-10 text-4xl font-bold">{name}</h1>
      <div className="mt-4 flex w-full flex-col gap-3">
        {Object.entries(country).map(([key, value]) => {
          if (key !== "borders" && key !== "flags" && key !== "name") {
            return (
              <ItemDescription
                key={key}
                title={titleDescription[key as keyof typeof titleDescription]}
                description={value}
              />
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4 flex w-full flex-col gap-3">
        <h2 className="font-bold">Border Countries:</h2>
        <div className="flex w-full flex-wrap gap-x-2 gap-y-6 pb-6">
          {bordersQuery.data?.map((border) => (
            <Link key={border} href={`/${border}`}>
              <span className="rounded-md bg-gray-200 px-4 py-2 shadow-md dark:bg-dark-blue">
                {border}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionCountry;
