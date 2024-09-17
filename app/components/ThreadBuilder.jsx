import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronUp,
  Lightbulb,
  MessageSquare,
  HelpCircle,
  Download,
} from "lucide-react";

const ThreadBuilder = () => {
  const [subThreads, setSubThreads] = useState([
    { subThread: "", subInterpretation: "" },
  ]);

  const addSubThread = () => {
    setSubThreads([...subThreads, { subThread: "", subInterpretation: "" }]);
  };

  return (
    <div className="bg-white rounded-lg ">
      <div
        className="flex items-center mb-4 p-1 bg-[#FEFFC033] relative h-[40px]"
        style={{ border: "0.1px solid #00000066" }}
      >
        <ChevronUp className="absolute left-2" />
        <h2 className="text-xl font-semibold w-full text-center">Thread A</h2>
      </div>

      {subThreads.map((item, index) => (
        <div key={index} className="mb-4 px-4">
          <div className="flex gap-4 mb-2 ">
            <div className="flex-1 border  border-opacity-8 rounded-[10px] h-full bg-[#0000000D] shadow-[2px_4px_4px_0px_#00000040]">
              <label className="block  font-medium text-sm mx-2 mt-1">
                Sub thread {index + 1}
              </label>
              <textarea
                placeholder="Enter text here"
                className="w-full h-[95px] p-2 border-none rounded resize-none outline-none"
                value={item.subThread}
                onChange={(e) => {
                  const newSubThreads = [...subThreads];
                  newSubThreads[index].subThread = e.target.value;
                  setSubThreads(newSubThreads);
                }}
              />
            </div>
            <div className="flex-1 border  border-opacity-8 rounded-[10px] h-full bg-[#0000000D] shadow-[2px_4px_4px_0px_#00000040]">
              <label className="block  font-medium text-sm mx-2 mt-1">
                Sub Interpretation {index + 1}
              </label>
              <textarea
                placeholder="Enter text here"
                className="w-full h-[95px] p-2 border-none rounded resize-none outline-none"
                value={item.subInterpretation}
                onChange={(e) => {
                  const newSubThreads = [...subThreads];
                  newSubThreads[index].subInterpretation = e.target.value;
                  setSubThreads(newSubThreads);
                }}
              />
            </div>
          </div>
        </div>
      ))}

<div className="flex items-center gap-2 mb-4 justify-end mx-4">
  <Image src='/threadIcons.svg' width={100} height={20}/>
  <select className="w-[91px] h-[32px] text-[10px] font-[600] p-1 border rounded shadow-[2px_4px_4px_0px_#00000040]">
    <option>Select Categ</option>
  </select>
  <select className="w-[91px] h-[32px] text-[10px] font-[600] p-1 border rounded shadow-[2px_4px_4px_0px_#00000040]">
    <option>Select Proces</option>
  </select>
</div>

      <button
        className="bg-blue-600 text-white py-2 px-3 rounded-[10px] font-[500] text-[12px] mx-5"
        onClick={addSubThread}
      >
        + Sub-thread
      </button>

      <div className="flex-1 border  border-opacity-8 rounded-[10px] h-full bg-[#0000000D] shadow-[2px_4px_4px_0px_#00000040] m-4 mb-0">
        <h3 className="block  font-medium text-sm mx-2 mt-1">Summary for Thread A</h3>
        <textarea
          className="w-full h-[95px] p-2 border-none rounded resize-none outline-none"
          rows="3"
          placeholder="Enter Text Here"
        ></textarea>
      </div>
    </div>
  );
};

export default ThreadBuilder;
