import React from "react";

export const Colors = ({title, rows}) => {

  const getColorBlock = (block) => {
    return <div className={`h-${block.h || 28} w-${block.w || 28} relative bg-${block.color} text-${block.text || 'white'}`}>
      <div className="absolute bottom-0 right-0 flex flex-col items-end p-5">
        <span className="font-bold">{block.name}</span>
        <span>{block.tint}</span>
      </div>
    </div>
  }

  return <div className="m-5">
    <h2>{title}</h2>
    <div className="flex flex-col text-white">
      {rows.map(row => <div className="w-full flex flex-row">
        {row.blocks.map((block) => getColorBlock({...block, text: block.text || row.text, w: block.w || row.w, h: block.h || row.h}))}
      </div>)}
    </div>
  </div>
}