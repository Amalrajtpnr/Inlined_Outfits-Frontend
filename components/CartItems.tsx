import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartItems() {
    const router=useRouter()


  return (
    <div className="w-[90%] h-[40%] flex flex-row items-start justify-start mt-6 ">
      <img src="/Rectangle11.svg" className="w-[35%] h-full" alt="" />

      <div className="w-[35%] h-full ">
        <h1 className="text-black font-bold text-[1.3rem]  ">
          Black printed tshirt
        </h1>
        <h1 className="text-black font-light text-[14px] mt-4 ">
          Men Black Printed Cotton Slim Fit T-shirt
        </h1>
        <div className="w-full h-[10%] flex flex-row items-center justify-start mt-1">
          <h1 className="font-medium text-[20px] ">Rs 249</h1>
          <h1 className="font-normal text-[14px] line-through text-[#00000094] ml-4">
            Rs399
          </h1>
          <h1 className="font-medium text-[14px] text-[#FF0000] ml-4">
            25% off
          </h1>
        </div>
        <div className="w-[35%] h-[15%] border border-black mt-6 rounded-[10px] flex flex-row items-center justify-between ">
          <button className="w-[30%] h-full text-[30px] flex flex-row items-center justify-center">
            -
          </button>
          <h1 className="text-[25px] ">0</h1>
          <button className="w-[30%] h-full text-[30px] flex flex-row items-center justify-center">
            +
          </button>
        </div>
      </div>
      <div className="w-[30%] h-full flex flex-col items-center justify-end">
        <div className="w-full h-[20%] border-[1px] border-black rounded-[10px] flex flex-col items-center justify-center mb-3">
          <h1 className="text-black font-semibold text-[14px]  ">Delete</h1>
        </div>
        <div onClick={()=>router.push("/checkout")} className="w-full h-[20%] bg-black rounded-[10px] flex flex-row items-center justify-center">
          <AiOutlineShoppingCart size={20} color="white" />

          <h1 className="text-white font-semibold text-[14px] ml-3">
            Proceed to Checkout
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
