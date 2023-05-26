'use client'
import React, { useState } from "react";

const AddSectionButton = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div
        className={`w-20 h-20 rounded-lg bg-gray-300 cursor-pointer ${
          selectedOption === "complete" ? "border-4 border-blue-500" : ""
        }`}
        onClick={() => handleSelectOption("complete")}
      ></div>
      <div
        className={`w-20 h-20 rounded-sm bg-gray-300 cursor-pointer ${
          selectedOption === "50-50" ? "border-4 border-blue-500" : ""
        }`}
        onClick={() => handleSelectOption("50-50")}
      >
        <div className="h-full space-x-2 flex ">
          <div className="w-1/2 bg-gray-400 rounded-sm"></div>
          <div className="w-1/2 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
      <div
        className={`w-20 h-20 rounded-lg bg-gray-300 cursor-pointer ${
          selectedOption === "33-33-33" ? "border-4 border-blue-500" : ""
        }`}
        onClick={() => handleSelectOption("33-33-33")}
      >
        <div className="h-full space-x-2 flex">
          <div className="w-1/3 bg-gray-400 rounded-sm"></div>
          <div className="w-1/3 bg-gray-400 rounded-sm"></div>
          <div className="w-1/3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>
      <button className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded shadow">
        Add Section
      </button>
    </div>
  );
};

export default AddSectionButton;