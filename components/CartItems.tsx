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

      <div className="w-[35%] h-full ">
        <h1 className="text-black font-bold text-[1.3rem]  ">
          {collection.product.name}
        </h1>
        <h1 className="text-black font-light text-[14px] mt-4 ">
          {collection.product.description}
        </h1>
        <div className="w-full h-[10%] flex flex-row items-center justify-start mt-1">
          <h1 className="font-medium text-[20px] ">
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
      <div className="w-[30%] h-full flex flex-col items-center justify-end">
        <div
          onClick={() => {
            deleteCart(collection);
          }}
          className="w-full h-[20%] border-[1px] border-black rounded-[10px] flex flex-col items-center justify-center mb-3"
        >
          <h1 className="text-black font-semibold text-[14px]  ">Delete</h1>
        </div>
        <div
        onClick={() => router.push(`/checkout/${collection.cartItemId}`)}
          className="w-full h-[20%] bg-black rounded-[10px] flex flex-row items-center justify-center"
        >
          <AiOutlineShoppingCart size={20} color="white" />

          <h1 className="text-white font-semibold text-[14px] ml-3">
            Proceed to Checkout
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
