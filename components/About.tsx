import React from "react";

function About() {
  return (
    <div className="w-[80%] min-h-[410px] flex flex-row items-center justify-between ">
      <div className="w-[45%] h-[100%] flex flex-col items-start justify-start">
        <h1 className="text-[1.7rem]  text-[#A96500] font-museo tracking-wider">
          About In&O
        </h1>
     
        <h1 className="text-[1.2rem]  text-black font-light mt-6 tracking-wider">
          YOLO is an ecommerce platform that specializes in providing custom
          printed design t-shirts. With YOLO, customers have the opportunity to
          create unique and personalized t-shirts by selecting from a wide range
          of design options or uploading their own artwork. The platform offers
          a user-friendly interface, making it easy for customers to customize
          their t-shirts with different colors, fonts, and graphics.
        </h1>
      </div>
      <div className="h-[80%] w-[50%]   flex flex-row items-start justify-end ">
        <div
          style={{ backgroundImage:"url(/Rectangle11.svg)" }}
          className="w-[40%] h-[80%] bg-cover  bg-center bg-no-repeat rounded-lg mr-16"
        >
          <img
            src="/Rectangle11.svg"
            alt=""
            className="w-full h-full rounded-lg rotate-12"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
