import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const ItemDescription: FC<Props> = ({ title, description }) => {
  return (
    <div className="flex w-full">
      <h2 className="mr-1 font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;
