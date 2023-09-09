"use client";

import DescriptionCountry from "@/components/description-country";
import Spinner from "@/components/spinner";
import { useCompleteCountry } from "@/hooks/useCompleteCountry";
import Link from "next/link";
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

interface Props {
  params: {
    name: string;
  };
  //   country: CompleteCountry;
}

const ShowCountry: FC<Props> = ({ params }) => {
  const { name } = params;
  const fullName = name.replace(/-/g, " ");
  const { completeCountryByNameQuery } = useCompleteCountry(fullName);
  const country = completeCountryByNameQuery.data;

  if (completeCountryByNameQuery.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex w-[320px] flex-col gap-16">
        <Link
          className="flex h-8 w-24 cursor-pointer items-center justify-center rounded-sm bg-white text-text-darkest-blue shadow-lg dark:bg-dark-blue dark:text-white"
          href={"/"}
        >
          <IoIosArrowRoundBack className="text-2xl" />
          <span className="text-base">Back</span>
        </Link>
        {country ? <DescriptionCountry country={country} /> : null}
      </div>
    </div>
  );
};

export default ShowCountry;
