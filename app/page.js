'use client';
import { useState } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar";
import TopContent from "./components/TopContent";
import ProjectManagement from "./components/ProjectManagement";
import AssetTitleList from "./components/AssetTitleList";

export default function Home() {
  const [isOpenLeft, setIsOpenLeft] = useState(false);
  const [isOpenRight, setIsOpenRight] = useState(false); // For right side notice board
  const [assetTitles, setAssetTitles] = useState([]);
  const jsonUrl = "/data.json";

  return (
    <div className="relative h-screen">
      <NavBar />

      {/* Left Side Collapsible Window */}
      <div
        className={`absolute top-39 left-0 h-[692px] transition-all duration-300 z-20 ${
          isOpenLeft ? "w-[392px]" : "w-[132px]"
        } bg-white shadow-lg rounded-lg`}
      >
        <div className="bg-black h-[50px] rounded-t-lg">
          <button
            className="absolute top-2 right-2 bg-black text-white rounded-md"
            onClick={() => setIsOpenLeft(!isOpenLeft)}
            aria-label="Toggle window"
          >
            {isOpenLeft ? (
              <Image src="/closeButton.svg" width={45} height={85} />
            ) : (
              <Image src="/openButton.svg" width={45} height={85} />
            )}
          </button>
        </div>

        {isOpenLeft && <AssetTitleList assetTitles={assetTitles} />}
        {!isOpenLeft &&(<div className="flex justify-center m-4"><svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="67" height="67" rx="19.5" stroke="#0029FF"/>
<path d="M29.368 23.96V20.972H36.136V47H32.824V23.96H29.368Z" fill="#0029FF"/>
</svg>
</div>
)}
      </div>

      {/* Right Side Collapsible Notice Board */}
<div
  className={`absolute top-39 right-0 h-[400px] transition-all duration-300 z-20 ${
    isOpenRight ? "w-[392px]" : "w-[132px]" // Adjusted collapsed width (Black + White bar)
  } bg-[#FDFDFD] shadow-lg rounded-lg`}
>
  {/* Black vertical bar */}
  <div className="bg-black h-full w-[80px] flex flex-col items-center justify-between py-6 rounded-tl-xl rounded-bl-xl">
    {/* Toggle button (open or close) at the top */}
    <button
      className="text-white text-3xl font-bold mb-4"
      onClick={() => setIsOpenRight(!isOpenRight)}
      aria-label="Toggle window"
    >
      {isOpenRight ? "X" : "≡"}  {/* "X" for close, "≡" (Hamburger icon) for open */}
    </button>

    {/* Notice Board Text */}
    <div className="flex flex-col items-center space-y-2">
      <span className="text-white text-sm font-light tracking-wider">N</span>
      <span className="text-white text-sm font-light tracking-wider">o</span>
      <span className="text-white text-sm font-light tracking-wider">t</span>
      <span className="text-white text-sm font-light tracking-wider">i</span>
      <span className="text-white text-sm font-light tracking-wider">c</span>
      <span className="text-white text-sm font-light tracking-wider">e</span>
      <span className="text-white text-sm font-light tracking-wider">B</span>
      <span className="text-white text-sm font-light tracking-wider">o</span>
      <span className="text-white text-sm font-light tracking-wider">a</span>
      <span className="text-white text-sm font-light tracking-wider">r</span>
      <span className="text-white text-sm font-light tracking-wider">d</span>
    </div>
  </div>

  {/* White Bar next to black bar */}
  <div className=" w-[52px] bg-white rounded-tr-lg rounded-br-lg"></div>

  
</div>


        

      {/* Main Content */}
      <TopContent />
      <ProjectManagement
        jsonUrl={jsonUrl}
        onAssetTitlesChange={setAssetTitles}
      />

      {/* Footer Images */}
      <div className="relative bottom-0 right-0">
        <div className="absolute bottom-0 right-0 flex flex-col items-center space-y-4 p-4">
          <Image src="/bottom1.svg" width={65} height={85} />
          <Image src="/bottom2.svg" width={65} height={85} />
          <Image src="/bottom3.svg" width={65} height={85} />
        </div>
      </div>
    </div>
  );
}
