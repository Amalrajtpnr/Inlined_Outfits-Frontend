import React from "react";
import Navbar from "../../components/Navbar";
import CartItems from "../../components/CartItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";

function Cart() {
  const router=useRouter  ()

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-full min-h-[85%] flex flex-row items-center justify-start overflow-y-scroll scrollbar-hide">
        <div className="w-[60%] h-full flex flex-col items-center justify-between  overflow-y-scroll scrollbar-hide ">
          <CartItems />
          <CartItems />
          <CartItems />
          <CartItems />
        </div>
        <div className="w-[40%] h-full flex flex-col items-start justify-start   ">
          <div className="w-[70%] h-[85%] rounded-[15px] border border-black flex flex-col items-start justify-start p-[40px] ">
            <h1 className="text-[22px] text-black font-semibold">Delivery</h1>
            <h1 className="text-[15px] text-black font-normal mt-4">
              Deliverydate : June 25
            </h1>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            <h1 className="text-[22px] text-black font-semibold mt-4">
              Subtotal
            </h1>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">
                Net Amount
              </h1>
              <h1 className="text-[15px] text-black font-normal ">₹4000</h1>
            </div>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Discount</h1>
              <h1 className="text-[15px] text-black font-normal ">₹500</h1>
            </div>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Delivery</h1>
              <h1 className="text-[15px] text-black font-normal ">₹50</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Total</h1>
              <h1 className="text-[15px] text-black font-normal ">₹3500</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            <div onClick={()=>router.push("/checkout")} className="w-[60%] h-[10%] bg-black rounded-[10px] flex flex-row items-center justify-center mt-8 ml-8">
              <AiOutlineShoppingCart size={20} color="white" />

              <h1 className="text-white font-semibold text-[14px] ml-3">
                Proceed to Checkout
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
