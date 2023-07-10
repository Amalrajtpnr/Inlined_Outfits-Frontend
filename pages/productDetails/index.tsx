import React from "react";
import Navbar from "../../components/Navbar";
import Colour from "../../components/Colour";
import Size from "../../components/Size";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TypeOfSpec from "../../components/TypeOfSpec";

export default function index() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-[100%] h-[85%] flex flex-row items-center justify-center">
        <div className="w-[50%] h-full  flex flex-col items-center justify-start ">
          <img src="/Rectangle 19.svg" className="w-[70%] h-[75%] " alt="" />
          <div className="w-[55%] h-[20%] flex flex-row items-center justify-start pl-[14px] box-border">
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%]" alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
          </div>
        </div>
        <div className="w-[50%] h-full  flex flex-col items-start justify-start ">
          <h1 className="text-2xl  text-black font-bold  tracking-wider">
            Black printed tshirt
          </h1>
          <h1 className="text-[16px] text-[#000000a6] font-light my-1">
            Men Black Printed Cotton Slim Fit T-shirt
          </h1>
          <div className="w-full h-[8%] flex flex-row items-center justify-start ">
            <h1 className="font-medium text-[23px] ">Rs 249</h1>
            <h1 className="font-normal text-[15px] line-through text-[#00000094] ml-4">
              Rs399
            </h1>
            <h1 className="font-medium text-[15px] text-[#FF0000] ml-4">
              25% off
            </h1>
          </div>
          <h1 className="text-[15px] font-medium mt-2     ">Colours</h1>
          <div className="h-[50px] w-[200px]  flex justify-between items-center my-2 ">
            <Colour colour="black" colourName="Black" />

            <Colour colour="white" colourName="White" bordercolour="black" />

            <Colour colour="red" colourName="Red" />

            <Colour colour="brown" colourName="Brown" />
          </div>
          <h1 className="text-[15px] font-medium mt-2  ">Size</h1>
          <div className="h-[50px] w-[300px] flex flex-row justify-between items-center my-2 ">
            <Size size="S" />
            <Size size="M" />
            <Size size="L" />
            <Size size="XL" />
            <Size size="XLL" />
            <div className="text-xs w-[100px]  ">Size Chart</div>
          </div>
          <div className="w-full h-[8%]  flex flex-row justify-start items-center ">
            <div className="w-[20%] h-full bg-black rounded-[10px] flex flex-row justify-center items-center ">
              <AiOutlineShoppingCart size={20} color="white" />

              <h1 className="text-[12px]  text-white font-semibold ml-2">
                Add to Cart
              </h1>
            </div>
            <div className="w-[20%] h-full border-[1px] border-black rounded-[10px] flex flex-row justify-center items-center  ml-4">
              <h1 className="text-[12px]  text-black font-semibold ml-2">
                Buy Now
              </h1>
            </div>
          </div>
          <h1 className="text-[18px] font-medium mt-3     ">Specifications</h1>
          <div className="h-[300px] w-[70%]  mb-5">
            <div className="h-[100%] w-[100%] flex flex-col justify-start items-center">
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Type" SpecDetails="Round Neck" />
                <TypeOfSpec Spec="Size" SpecDetails="L" />
              </div>
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Sleeve" SpecDetails="Half Sleeve" />
                <TypeOfSpec
                  Spec="Fabric Care"
                  SpecDetails="Gentle Machine Wash"
                />
              </div>
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Fit" SpecDetails="Slim" />
                <TypeOfSpec Spec="Net Quantity" SpecDetails={1} />
              </div>
              <div className="h-[25%] w-[100%] border-y-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Fabric" SpecDetails="Cotton" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
