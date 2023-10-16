import React from "react";
import Card from "./Card";
import Personalize from "./Personalize";
import { useRouter } from "next/router";

function LatestTrends({ products }: { products: any[] }) {
  const router=useRouter()

  return (
    <div className="w-full lg:min-h-[140vh]  flex flex-col items-center justify-start  ">
      <h1 className="lg:text-[65px] sm300:text-[27px] text-black font-MuseoModerno tracking-wider lg:mt-0 sm300:mt-[50px]">
        Fashion Up Your Looks
      </h1>
      <div className="w-[80%] h-[50%]  flex flex-col lg:items-start sm300:items-center justify-start lg:mt-0 sm300:mt-[50px]">
        <h1 className="text-[25px]  text-[#A96500] font-MuseoModerno">
          Latest Trending
        </h1>
        <div className="w-[100%] lg:min-h-[70vh] sm300:min-h-[220px]  lg:flex-row flex flex-row sm300:flex-col items-center justify-between mt-2">
        {products.slice(0, 4).map((product: any, i: number) => (
          <Card    onClick={() => router.push("/shop")}
          key={i}
          image={product.images[0]}
          nameofT={product.name}
          details={product.description}
          offprice={product.price.original}
          realprice={Math.round(
            product.price.original *
              (100 / (100 - parseFloat(product.price.offer)))
          )}
          off={product.price.offer}/>
        ))}
        
        </div>
      </div>
      <div className="w-[80%] lg:h-[55%] lg:mt-4 sm300:mt-[50px] flex flex-col items-start justify-start  ">
        <h1 className="text-[27px]  text-[#A96500] font-MuseoModerno">
        Personalize your tees
        </h1>
      <div className="w-full h-[100%] sm300:flex-col flex lg:flex-row items-center  justify-between lg:mt-2 sm300:mt-8">
      <Personalize/>
        <Personalize/>
        <Personalize/>
        <Personalize/>
      </div>

      </div>
    </div>
  );
}

export default LatestTrends;
