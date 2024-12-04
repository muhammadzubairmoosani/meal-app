import React from "react";
import Image from "next/image";

const MealCard = ({
  meal,
  week,
  handleRemoveMealFromWeek,
  handleSelect,
  isSelected,
}) => {
  return (
    <div
      onClick={() => (week === "allMeals" ? handleSelect(meal) : {})}
      className={`flex flex-col mx-2 justify-between max-w-sm p-4 relative rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border ${
        isSelected && "border-gray-500"
      }`}
    >
      {week !== "allMeals" && (
        <button
          onClick={() => handleRemoveMealFromWeek(meal, week)}
          className=" absolute left-6 top-6 bg-red-500 text-white p-2  text-sm font-semibold hover:bg-red-600 transition"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </button>
      )}
      <Image
        src={meal.image}
        alt={meal.name}
        width={500}
        height={300}
        priority
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="py-2">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {meal.name}
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          {meal.instructions.join(" ")}
        </p>
      </div>
      <div className="py-2">
        <div className="flex justify-between">
          <p className="text-sm text-gray-900 mt-2">
            <b>Cuisine:</b> {meal.cuisine}
          </p>
          <div className="flex items-center">
            <p className="text-sm text-gray-900 mt-2">
              <b>Rating:</b> {meal.rating}
            </p>
            <div className="flex mt-2 ml-2">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
