import React from 'react'

const AssetTitleList = ({assetTitles}) => {
  return (
    <div className="bg-[#FCFCFC] p-4  rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Explore the world of management</h2>
      <ul className="list-disc pl-5">
        {assetTitles.map((title, index) => (
          <li key={index} className="text-black text-[15px] font-[400] mb-2">
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AssetTitleList
