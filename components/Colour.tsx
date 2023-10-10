import React from "react";
type props = {
  colour: string;
  bordercolour?: string;
  isActive?: boolean;
  onClick?: () => void;

  colourName: string;
};

function Colour({
  colour,
  bordercolour,
  colourName,
  isActive,
  onClick,
}: props) {
  return (
    <div
      onClick={onClick}
      className="h-[100%] min-w-[35%] flex flex-col justify-between items-center  "
    >
      <div
        style={{ backgroundColor: colour, borderColor: bordercolour }}
        className={`h-[35px] w-[35px] rounded-full border-[1px] ${
          isActive
            ? "border-[2px] border-[#0d0f8b]"
            : "border-[1px] border-black"
        }`}
      ></div>
      <h1 className={`${isActive ? "text-[#0d0f8b] font-extrabold" : "text-black font-normal"} text-[10px]`}>{colourName}</h1>
    </div>
  );
}

export default Colour;
