import React from 'react'

const InfoSection = ({data}) => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 w-full h-fit">
    <h1 className="text-lg text-green-800">{data.heading}</h1>
    <div className="flex flex-col items-center justify-center gap-5 w-full h-fit">
      <div className="flex flex-col items-center justify-center h-fit w-full gap-2">
        {Object.entries(data)
          .filter(([key]) => key !== "heading") // Exclude the heading
          .map(([key, value], index) => (
            <div key={index} className="flex items-center justify-center h-fit w-full">
              <p className="flex items-center justify-center h-fit w-full gap-5 text-sm">
                <span className="flex items-center justify-start w-2/5 h-fit">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <span className="flex items-center justify-start w-1/5">:</span>
                <span className="flex items-center justify-start text-left w-2/5">{value}</span>
              </p>
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default InfoSection