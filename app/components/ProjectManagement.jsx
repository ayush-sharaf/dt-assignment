"use client";
import React, { useEffect, useState } from "react";
import ThreadBuilder from "./ThreadBuilder";
import MethodContainer from "./MethodContainer";
import Image from "next/image";
import ThreadContent from "./ThreadContent";
import AssetTitleList from "./AssetTitleList";
const ProjectManagement = ({ jsonUrl,onAssetTitlesChange}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(jsonUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
        const assetTitles = result.tasks[0].assets.map((asset) => asset.asset_title);
        onAssetTitlesChange(assetTitles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [jsonUrl,onAssetTitlesChange]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-start">
        <div className="mb-6 w-[1066px] h-[135px] bg-[#E9ECEF] p-4  rounded-[5px]">
          <h1 className=" font-[700] text-[20px] mt-2">
            Explore the world of management
          </h1>
          <p className="text-black mt-2 font-[400] text-[14px]">
            As a project manager, you play an important role in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How do you want to manage each step of
            your life?
          </p>
        </div>
      </div>

      {/* Tasks Section */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {data.tasks[0].assets.map((asset) => (
            <div
              key={asset.asset_id}
              className="bg-white  shadow-md rounded-lg w-[480px] h-[580px] "
            >
              <div className="bg-black flex w-full h-[50px] rounded-t-lg items-center px-4 relative">
                <h2 className="text-lg text-white font-semibold text-center flex-grow">
                  {asset.asset_title}
                </h2>
                <div className="absolute right-4">
                  <Image
                    src="/infobutton.svg"
                    width={20}
                    height={20}
                    alt="Info"
                  />
                </div>
              </div>

              <p className="text-black text-[15px]  mx-4 mt-4 mb-4 font-[400]">
                <span className="text-[16px] font-[600] ">Description: </span>
                {asset.asset_description}
              </p>
              {asset.asset_content_type === "video" && (
                <iframe
                  width="100%"
                  height="291px"
                  src={asset.asset_content.trim()}
                  title={asset.asset_title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              {asset.asset_content_type === "threadbuilder" && (
                <ThreadBuilder />
              )}
              {asset.asset_content_type === "article" && (
                <div className="p-6 shadow overflow-hidden">
                 
                  {asset.asset_title === "Structure you pointers " && (
                   <ThreadContent/>
                  )}
                </div>
              )}
              {asset.asset_content_type === "article" &&
                asset.asset_title === "4SA Method" && (
                  <MethodContainer/>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
