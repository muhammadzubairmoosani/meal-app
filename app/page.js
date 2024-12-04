"use client";
import { useState, useEffect } from "react";
import SelectWeekModal from "./components/selectWeekModal";
import NavigationBar from "./components/nagivationBar";
import MealList from "./components/mealList";
import Header from "./components/header";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectListViewOption, setSelectListViewOption] = useState("allMeals");
  const [selectedMeals, setSeletedMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState({
    allMeals: [],
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const jsonData = await fetch("https://dummyjson.com/recipes");
        const data = await jsonData.json();
        setMeals((prevState) => ({ ...prevState, allMeals: data.recipes }));
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (meal) => {
    if (!selectedMeals.some((prevMeal) => prevMeal.id === meal.id)) {
      setSeletedMeals((prevState) => [...prevState, meal]);
    } else {
      setSeletedMeals((prevState) =>
        prevState.filter((prevMeal) => prevMeal.id !== meal.id)
      );
    }
  };

  const handleRemoveMealFromWeek = (meal, week) => {
    setMeals((prevState) => ({
      ...prevState,
      [week]: prevState[week].filter((i) => i.id !== meal.id),
    }));
  };

  const addMealsToWeek = (week) => {
    if (
      !meals[week].some(
        (meal) => selectedMeals.some(selectedMeal => selectedMeal.id === meal.id)
          // meal.id === selectedMeals.map((i) => i.id)
      )
    ) {
      setMeals((prev) => ({
        ...prev,
        [week]: [...prev[week], ...selectedMeals],
      }));
      setSeletedMeals([]);
    } else {
      alert(`Meal/Meals already axist in this week.`);
    }
  };

  if (isLoading)
    return (
      <div className="h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div className="h-screen bg-gray-50">
      <Header
        imageUrl={meals.allMeals[0]?.image}
        ImageName={meals.allMeals[0]?.name}
      />
      <NavigationBar
        selectedMeals={selectedMeals}
        setIsOpen={setIsOpen}
        selectListViewOption={selectListViewOption}
        setSelectListViewOption={setSelectListViewOption}
      />
      <MealList
        meals={meals}
        selectedMeals={selectedMeals}
        selectListViewOption={selectListViewOption}
        handleRemoveMealFromWeek={handleRemoveMealFromWeek}
        handleSelect={handleSelect}
      />
      <SelectWeekModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addMealsToWeek={addMealsToWeek}
      />
    </div>
  );
}
