import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";

function Checkout() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-full min-h-[85%] flex flex-row items-center justify-center overflow-y-scroll scrollbar-hide">
        <div className="w-[60%] h-full flex flex-col items-start justify-start  overflow-y-scroll scrollbar-hide ">
          <h1 className="text-[22px] text-black font-semibold ">
            Delivery Address
          </h1>
          <div className="w-full min-h-[45%] flex flex-row items-center justify-start ">
            <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400  flex flex-col items-center justify-center ">
              <MdHome size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div>
            <div className="w-[30%] h-[90%] rounded-[20px] border border-gray-400   flex flex-col items-center justify-center ml-8">
              <BsBuildingsFill size={40} color="grey" />
              <h1 className="text-[15px] text-black font-normal">
                Athul vishnu
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">
                Karamel Vellur (PO) Payyanur
              </h1>{" "}
              <h1 className="text-[15px] text-black font-normal">670307</h1>{" "}
              <h1 className="text-[15px] text-black font-normal">9876543210</h1>{" "}
            </div>
          </div>
          <div className="w-[65%] min-h-[10%]  flex flex-col items-start justify-start border border-gray-400 rounded-[20px] p-[20px] overflow-y-scroll scrollbar-hide">
            <div className="w-[100%] h-[100%]   flex flex-row items-center justify-between">
              <h1 className="text-[18px] text-black font-medium">
                Add a new address
              </h1>{" "}
              {isActive ? (
                <AiOutlineMinus
                  onClick={() => {
                    setIsActive(false);
                  }}
                  size={30}
                />
              ) : (
                <LuPlus
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                  size={30}
                />
              )}
            </div>

            {isActive && (
              <div className="min-h-[500px] w-[100%]  flex flex-col items-start justify-between mt-3 ">
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    type="text"
                    placeholder=" Locality"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    type="text"
                    placeholder="Pincode"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-full h-[18%] flex flex-row items-center justify-between ">
                  <input
                    type="text"
                    placeholder=" Address"
                    className="w-[100%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />
                </div>
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    type="text"
                    placeholder=" District/Town/City"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    type="text"
                    placeholder="Select State"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>{" "}
                <div className="w-full h-[10%] flex flex-row items-center justify-between ">
                  <input
                    type="text"
                    placeholder=" Landmark(Optional)"
                    className="w-[48%] h-full border border-gray-400 text-xs outline-none mt-6 p-3 box-border rounded-[15px]"
                  />

                  <input
                    type="text"
                    placeholder="Alternate Phone (Optional)"
                    className="w-[48%] h-full border border-gray-400 text-xs mt-6 p-3 outline-none box-border rounded-[15px] "
                  />
                </div>
                <div className="w-[50%] h-[10%] flex flex-row items-center justify-between ">
                  <h1 className="text-[12px] font-medium">Address Type</h1>
                  <div className="w-[30%] h-[50%] flex flex-row items-center justify-around ">
                    <input
                      type="radio"
                      placeholder=" Landmark(Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                    />
                    <h1 className="text-[12px] font-medium">Home</h1>
                  </div>
                  <div className="w-[25%] h-[50%] flex flex-row items-center justify-around ">
                    <input
                      type="radio"
                      placeholder=" Landmark(Optional)"
                      className="w-[48%] h-full border border-gray-400 text-xs outline-none  rounded-[15px]"
                    />
                    <h1 className="text-[12px] font-medium">Work</h1>
                  </div>
                </div>
                <div className="w-full h-[9%] flex flex-row items-center justify-end ">
                  <button className="w-[25%] h-full text-[12px] font-medium bg-black text-white rounded-lg  flex flex-row items-center justify-center">
                    Save and Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-[26%] h-full flex flex-col items-start justify-start  border ">
          <div className="w-[100%] h-[80%] rounded-[15px] border border-gray-400  flex flex-col items-start justify-around pl-[70px] p-[30px] ">
            <h1 className="text-[22px] text-black font-semibold">
              Price Details
            </h1>

            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">
                Net Amount
              </h1>
              <h1 className="text-[15px] text-black font-normal ">₹4000</h1>
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
            <h1 className="text-[15px] text-black font-normal ">
              You saved 500 on this order
            </h1>
            <div className="w-[60%] h-[10%] bg-black rounded-[10px] flex flex-row items-center justify-center mt-8 ml-8">
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

export default Checkout;
