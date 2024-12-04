import { Fragment } from "react";
import Image from "next/image";

const Header = ({ imageUrl, ImageName }) => (
  <Fragment>
    <div className="relevent h-80 flex justify-center items-center flex-col">
      <div className="absolute bg-white bg-opacity-80 w-full h-80" />
      <div className="text-center absolute">
        <h1 className="md:text-4xl font-bold text-lg ">Optimized Your Meal</h1>
        <p className="px-4">
          Select Meal to Add in Week. You will be able to edit. modify and
          change the Meal Weeks.
        </p>
      </div>
      <Image
        src={imageUrl || ''}
        alt={ImageName || "wall image"}
        width={500}
        height={300}
        priority
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="my-6 px-2 m-auto max-w-[1175px]">
      <h1 className="md:text-2xl lg:text-left text-lg text-center font-bold ">
        Week Orders
      </h1>
    </div>
  </Fragment>
);

export default Header;
