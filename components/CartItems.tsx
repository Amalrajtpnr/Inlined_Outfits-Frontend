import { useRouter } from "next/router";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type props = {
  collection: any;
};

function CartItems({ collection }: props) {
  const router = useRouter();

  const deleteCart = async (item: any) => {
    const user = JSON.parse(localStorage.getItem("user")!);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/remove`,
        {
          method: "DELETE", // Use the DELETE method for removing items
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: item.productId,
            email: user.email,
            cartItemId: item.cartItemId,
            quantity: item.quantity,
          }),
        }
      );
      const data = await res.json();
      if (!data.error) {
        window.location.reload();
      } else {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[90%] h-[30%] flex flex-row items-start justify-start mt-6 border border-gray-400 rounded-3xl p-2 drop-shadow-2xl">
      <img src="/Rectangle11.svg" className="w-[35%] h-full" alt="" />

      <div className="w-[65%] h-full flex lg:flex-row sm300:flex-col items-start justify-start lg:p-0 sm300:p-1 box-border">
        <div className="lg:w-[70%] sm300:w-full lg:h-full sm300:h-[70%]">
          <h1 className="text-black font-bold lg:text-[1.3rem] sm300:text-[1rem] ">
            {collection.product.name}
          </h1>
          <h1 className="text-black font-light lg:text-[14px] sm300:text-[12px] lg:mt-4  ">
            {collection.product.description}
          </h1>
          <div className="w-full h-[10%] flex flex-row items-center justify-start lg:mt-1 sm300:mt-3">
            <h1 className="font-medium lg:text-[20px] ">
              $ {collection.product.price.original}
            </h1>
            <h1 className="font-normal text-[14px] line-through text-[#00000094] ml-4">
              $ {collection.product.price.original}
            </h1>
            <h1 className="font-medium text-[14px] text-[#FF0000] ml-4">
              {collection.product.price.offer} % off
            </h1>
          </div>
        </div>
        <div className="lg:w-[30%]   sm300:w-full sm300:h-[30%] lg:h-full flex lg:flex-col sm300:flex-row items-center lg:justify-end sm300:justify-between ">
          <div
            onClick={() => {
              deleteCart(collection);
            }}
            className="lg:w-full sm300:w-[45%] sm300:h-[70%] lg:h-[20%] border-[1px] border-black rounded-[10px] flex flex-col items-center justify-center cursor-pointer lg:mb-3"
          >
            <h1 className="text-black font-semibold text-[14px]  ">Delete</h1>
          </div>
          <div
            onClick={() => router.push(`/checkout/${collection.cartItemId}`)}
            className="lg:w-full sm300:w-[48%] sm300:h-[70%] lg:h-[20%] bg-black rounded-[10px] flex flex-row items-center cursor-pointer lg:justify-center lg:p-0 sm300:p-2 box-border"
          >
            <AiOutlineShoppingCart size={20} color="white" />

            <h1 className="text-white font-semibold lg:text-[12px] sm300:text-[10px] ml-3">
              Proceed to Checkout
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
