const NavigationBar = ({
  selectListViewOption,
  setSelectListViewOption,
  selectedMeals,
  setIsOpen,
}) => {
  return (
    <div className="sticky top-0 bg-white z-50 w-full flex justify-center h-20">
      <ul className="w-full max-w-[1175px] overflow-auto px-5 flex justify-between items-center">
        <li>
          <button
            className={`${
              selectListViewOption === "allMeals" &&
              "border-b-4 border-blue-700"
            } py-2 w-36 font-bold`}
            onClick={() => setSelectListViewOption("allMeals")}
          >
            All Meals
          </button>
        </li>
        {[1, 2, 3, 4].map((i) => (
          <li key={i}>
            <button
              className={`${
                selectListViewOption === `week${i}` &&
                "border-b-4 border-blue-700"
              } py-2 w-36 font-bold`}
              onClick={() => setSelectListViewOption(`week${i}`)}
            >
              {`Week ${i}`}
            </button>
          </li>
        ))}
        <li>
          <button
            disabled={
              selectListViewOption !== "allMeals" || !selectedMeals.length
            }
            onClick={() => setIsOpen(true)}
            className={`py-2 w-36 bg-blue-700 ${
              (selectListViewOption !== "allMeals" || !selectedMeals.length) &&
              "bg-gray-400"
            } text-white text-sm font-bold shadow-sm rounded-sm`}
          >
            Add to Week
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
