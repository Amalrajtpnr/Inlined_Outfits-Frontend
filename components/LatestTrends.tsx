import React from "react";
import Card from "./Card";
import Personalize from "./Personalize";
import { useRouter } from "next/router";

function LatestTrends({ products }: { products: any[] }) {
  const router=useRouter()

  return (
    <div className="w-full min-h-[140vh] flex flex-col items-center justify-start  ">
      <h1 className="text-[65px]  text-black font-museo tracking-wider">
        Fashion Up Your Looks
      </h1>
      <div className="w-[80%] h-[50%]  flex flex-col items-start justify-start ">
        <h1 className="text-[30px]  text-[#A96500] font-museo">
          Latest Trending
        </h1>
        <div className="w-[100%] h-[70vh] flex flex-row items-center justify-between mt-2">
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
      <div className="w-[80%] h-[55%]  flex flex-col items-start justify-start ">
        <h1 className="text-[30px]  text-[#A96500] font-museo">
        Personalize your tees
        </h1>
      <div className="w-full h-[100%] flex flex-row items-center justify-between mt-2">
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
