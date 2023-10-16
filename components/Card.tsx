import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";


type props = {
  image: string;
  nameofT: string;
  details: string;
  offprice?: number;
  realprice?: number;
  off?: number;
  onClick?: () => void;
};

function Card({
  image,
  nameofT,
  details,
  offprice,
  realprice,
  off,
  onClick,
}: props) {
  const router = useRouter();
  const [post, setPost] = useState("");



  return (
    <div
      onClick={onClick}
      className="w-[260px] h-[485px] flex flex-col items-start justify-start  cursor-pointer sm300:mt-4 lg:mt-0"
    >
      <Image
        width={150}
        height={120}
        className="w-full "
        src="/Rectangle 10.svg"
        alt=""
      />
      <h1 className="text-[18px]  text-black font-[700]">{nameofT}</h1>
      <h1 className="text-[14px]  text-black font-normal ">
      {details}
      </h1>
      <div className="w-full h-[10%]  flex flex-row items-center justify-start">
        <h1 className="text-[13px]  text-black font-[600]  ">Rs{realprice}</h1>
        <h1 className="font-medium text-[11px] text-[#00000094] line-through ml-6 ">
          Rs{realprice}
        </h1>
        <h1 className="font-semibold text-[11px] text-[#FF0000]  ml-6 ">
        {offprice}off
        </h1>
      </div>
    </div>
  );
}

export default Card;
