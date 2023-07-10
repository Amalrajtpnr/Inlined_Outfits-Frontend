import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

function Navbar() {
  const router = useRouter();
  const [isadmin, setIsAdmin] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="w-screen min-h-[15%]  flex flex-row items-center justify-between">
      <div className="w-[20%] h-full   flex flex-row items-center justify-center">
        <img src="/In&O.svg" className="w-[50%] h-[50%]" alt="" />
      </div>
      <div className="w-[50%] h-full px-[20px]  flex flex-row items-center justify-around">
        <h1
          style={{
            borderBottom: router.pathname === "/" ? "solid 2px black" : "white",
          }}
          onClick={() => router.push("/")}
          className="text-black text-[16px] h-[25%] font-semibold  cursor-pointer"
        >
          Home
        </h1>
        <h1
          style={{
            borderBottom:
              router.pathname === "/shop" ? "solid 2px black" : "white",
          }}
          onClick={() => router.push("/shop")}
          className="text-black text-[16px] font-semibold cursor-pointer"
        >
          Shop
        </h1>
        <h1 className="text-black text-[16px] font-semibold">Contact Us</h1>
        <div className="w-[10%] min-h-[20%] flex flex-col items-center justify-center relative  cursor-pointer">
          <div className="w-full h-full">
            <BsPerson
              onClick={() => {
                setIsAdmin(!isadmin);
              }}
              size={20}
            />
            {isadmin && (
              <div className="w-[200px] h-[200px] absolute top-[30px] right-[45px] p-[20px] drop-shadow-lg border-gray-400 flex flex-col items-start justify-around rounded-[20px] bg-white border z-[100]">
                <h1
                  onClick={() => {
                    router.push("/personalDetails");
                    setIsAdmin(false);
                  }}
                  className="text-black text-[16px] font-semibold"
                >
                  Profile
                </h1>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <h1 className="text-black text-[16px] font-semibold">
                  My Orders
                </h1>
                <div className="w-full h-[1px] bg-gray-400"></div>
                <h1
                  onClick={() => {
                    setSignUp(!signUp);
                    setIsAdmin(false);
                  }}
                  className="text-[#FF0000] text-[16px] font-semibold"
                >
                  Log In
                </h1>
              </div>
            )}
          </div>
        </div>
        <div
          onClick={() => router.push("/cart")}
          className="w-[20%] h-[45%] rounded-[15px] bg-black flex flex-row items-center justify-center  cursor-pointer"
        >
          <AiOutlineShoppingCart size={20} color="white" />

          <h1 className="text-white text-sm font-medium ml-3">Cart</h1>
        </div>
      </div>
      {signUp && (
        <div className="h-screen bg-black z-[100] fixed top-0 left-0 right-0 bg-transparent  flex flex-col items-center justify-center ">
          <div className="w-[50%] h-[60%] bg-white rounded-[30px] flex flex-row items-center justify-center p-[40px] box-border ">
            <div className="w-[50%] h-full flex flex-col items-center justify-start ">
              <img src="/In&O.svg" className="w-[40%] h-[20%]" alt="" />
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start  border-b border-black">
                <IoCallOutline size={25} color="grey" />
                <input
                  type="text"
                  name=""
                  placeholder="phone"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-[90%] h-[20%] flex flex-row items-center justify-start border-b border-black">
                <HiOutlineKey size={25} color="grey" />
                <input
                  type="text"
                  name=""
                  placeholder="password"
                  id=""
                  className="ml-6 h-[80%] w-[90%] outline-none"
                />
              </div>
              <div className="w-full h-[25%] flex flex-col items-center justify-around  mt-4">
                <button className="w-[38%] h-[50%] rounded-[10px] bg-black text-white font-semibold text-[15px]">
                  Login
                </button>
                <h1 className="text-black text-[12px] font-normal">
                  New to In&O ?<span>New to In&O ? Create Account</span>
                </h1>
              </div>
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center ">
              <div className="w-full h-[10%] flex flex-col items-end justify-center ">
                <IoCloseCircleOutline
                  onClick={() => {
                    setSignUp(false);
                  }}
                  size={32}
                />
              </div>
              <img src="/Rectangle 14.svg" className="w-full h-[100%]" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
