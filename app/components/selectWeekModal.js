import { useState } from "react";

const SelectWeekModal = ({ isOpen, setIsOpen, addMealsToWeek }) => {
  const [selectedWeek, setSelectedWeek] = useState("");
  const onSave = () => {
    addMealsToWeek(selectedWeek);
    handleClose();
  };
  const handleClose = () => {
    setIsOpen(false);
    setSelectedWeek("");
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="bg-white w-full max-w-[500px] mx-2 p-8 rounded-lg shadow-lg relative flex flex-col items-center gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="md:text-2xl text-lg font-bold text-center ">
              Select Week
            </h2>
            <div className="flex justify-between flex-col md:flex-row gap-6 w-full">
              {[1, 2, 3, 4].map((week) => (
                <button
                  key={week}
                  onClick={() => setSelectedWeek(`week${week}`)}
                  className={`${
                    selectedWeek === `week${week}`
                      ? "bg-blue-200"
                      : "bg-gray-200"
                  }  px-5 py-2 shadow-md rounded-md `}
                >
                  {`week ${week}`}
                </button>
              ))}
            </div>
            <button
              onClick={onSave}
              className="py-2 px-12 bg-blue-700 text-white text-sm font-bold shadow-sm rounded-sm"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectWeekModal;
