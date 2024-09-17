import { useState } from "react";
import React from 'react'
import { ChevronDown , ChevronUp} from "lucide-react";
const MethodContainer = () => {
    const [showThreadA, setShowThreadA] = useState(true);
    const [showExample1, setShowExample1] = useState(true);
  
    const toggleThreadA = () => {
      setShowThreadA(!showThreadA);
    };
  
    const toggleExample1 = () => {
      setShowExample1(!showExample1);
    };
  
    return (
      <div className="container mx-auto  rounded-lg shadow-md h-[425px]">
        <div className="border-b border-gray-300 bg-[#F2F2F2] mt-0 mx-4 p-2">
          <button onClick={toggleThreadA} className="flex items-start text-black font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <ChevronUp  />
            Introduction
          </button>
        </div>
  
        {showThreadA && (
          <div className="mt-4 mx-5">
            <p className="text-black font-[400] text-[14px] mb-6">
              The 4SA Method, How to bring a idea into progress?
            </p>
            <div className="flex justify-end">
            <button className="text-[#606161] text-[14px] mb-6">
              See More
            </button>
            </div>
          </div>
          
        )}
  
        <div className="border border-[#D9D7D7] bg-[#FCFCFC] mt-0 mx-4 p-2">
          <button onClick={toggleThreadA} className="text-black font-bold  flex hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <ChevronUp  />
            Thread A
          </button>
        </div>
  
        {showThreadA && (
          <div className="mt-4">
            <p className="text-black font-[400] text-[14px]  ml-9 mr-2 mb-6">
              How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?
            </p>
            <div className="flex justify-end">
            <button className="text-[#606161] text-[14px] mr-5 mb-6">
              See More
            </button>
            </div>
          </div>
        )}
  
        <div className="border border-[#D9D7D7] bg-[#FCFCFC] mt-0 mx-4 p-2 ml-12">
          <button onClick={toggleExample1} className="text-black font-bold  hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Example 1
          </button>
        </div>
  
        {showExample1 && (
          <div className="mt-4">
            <p className="text-black font-[400] text-[14px]  ml-12 mr-2 mb-6">
              You have a concept, How will you put into progress?
            </p>
          </div>
        )}
      </div>
    );
}

export default MethodContainer
