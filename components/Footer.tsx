import React from "react";

function Footer() {
  return (
    <div className="w-full lg:min-h-[30vh] sm300:min-h-[50vh] flex lg:flex-row sm300:flex-col items-center justify-between lg:px-12 sm300:px-0 sm300:p-4 lg:p-0  bg-black">
           <img src="/In&O.svg" className="lg:w-[20%] sm300:w-[30%]  h-[30%]" alt="" />

      <div className="lg:w-[25%] sm300:w-[80%] h-full flex lg:flex-row sm300:flex-col lg:items-start sm300:items-center  justify-between ">
        <div className="w-[50%] h-full flex flex-col  lg:items-start sm300:items-center justify-around">
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Home
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Shop
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Contact Us
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Terms & Conditions
          </h1>
        </div>
        <div className="w-[50%] h-[70%] flex flex-col lg:items-start sm300:items-center justify-around mt-0">
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Intsagram
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Whatsapp
          </h1>
          <h1 className="text-sm  text-white font-semibold tracking-wider">
            Email
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
