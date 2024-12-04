import MealCard from "./mealCard";

const MealList = ({
  meals,
  selectedMeals,
  selectListViewOption,
  handleRemoveMealFromWeek,
  handleSelect,
}) => (
  <div className="flex flex-wrap gap-4 justify-center mt-12">
    {!meals[selectListViewOption].length ? (
      <h2 className="md:text-2xl text-lg font-bold text-center ">
        No meals found in this week
      </h2>
    ) : (
      meals[selectListViewOption].map((meal) => {
        return (
          <MealCard
            key={meal.id}
            meal={meal}
            week={selectListViewOption}
            handleRemoveMealFromWeek={handleRemoveMealFromWeek}
            handleSelect={handleSelect}
            isSelected={selectedMeals.some((i) => i.id === meal.id)}
          />
        );
      })
    )}
  </div>
);

export default MealList;
