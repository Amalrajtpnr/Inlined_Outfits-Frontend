import React from "react";

function About() {
  return (
    <div className="lg:w-[80%] sm300:w-[90%] lg:min-h-[410px] sm300:min-h-[600px] flex lg:flex-row sm300:flex-col  items-center lg:justify-between  sm300:justify-start sm300:mt-0  lg:mt-4 lg:mb-0 sm300:mb-[50px] ">
      <div className="lg:w-[45%] lg:h-[100%] sm300:min-h-[50%] flex lg:flex-col sm300:flex-col sm300:items-center lg:items-start justify-start">
        <h1 className="text-[1.7rem]  text-[#A96500] font-museo tracking-wider">
          About In&O
        </h1>
     
        <h1 className="lg:text-[1.2rem] sm300:text-[1rem] sm300:text-center lg:text-left flex flex-col justify-center items-center  text-black font-light lg:mt-6 sm300:mt-4 lg:tracking-wider">
          YOLO is an ecommerce platform that specializes in providing custom
          printed design t-shirts. With YOLO, customers have the opportunity to
          create unique and personalized t-shirts by selecting from a wide range
          of design options or uploading their own artwork. The platform offers
          a user-friendly interface, making it easy for customers to customize
          their t-shirts with different colors, fonts, and graphics.
        </h1>
      </div>
      <div className=" lg:h-[80%] lg:w-[50%] sm300:w-full sm300:h-[45%]  flex flex-row lg:items-start sm300:items-center lg:justify-end sm300:justify-center sm300:mt-4 lg:mt-0 ">
        <div
          style={{ backgroundImage:"url(/Rectangle11.svg)" }}
          className="lg:w-[40%] lg:h-[80%] sm300:w-[70%]  sm300:min-h-[40%]  bg-cover  bg-center bg-no-repeat rounded-lg lg:mr-16 sm300:mr-0"
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
