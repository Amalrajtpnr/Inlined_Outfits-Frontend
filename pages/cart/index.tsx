import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import CartItems from "../../components/CartItems";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/router";

function Cart() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any>({});
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [items, setItems] = useState<any>({})

  const getCart = async () => {
    const user = JSON.parse(localStorage.getItem("user")!);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/cart/${user.email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.error) {
        console.log(data);
        setCartItems(data);
        // Calculate the total amount by iterating through cart items
        let calculatedTotalAmount = 0;
        let initialDiscount = 0;

        for (let i = 0; i < data.products.length; i++) {
          // Get the original price of the item at index i and add it to the overall total
          const originalPrice = parseFloat(
            data.products[i]?.product?.price?.original
          );
          const offer = parseFloat(data.products[i]?.product?.price?.offer);

          initialDiscount += offer;
          calculatedTotalAmount += originalPrice;
        }

        setDiscount(initialDiscount);
        // Update the totalAmount state using setTotalAmount
        setTotalAmount(calculatedTotalAmount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-full min-h-[85%] flex flex-row items-center justify-start overflow-y-scroll scrollbar-hide">
        <div className="w-[60%] h-full flex flex-col items-center justify-start  overflow-y-scroll scrollbar-hide ">
          {cartItems?.products?.map((item: any, i: number) => (
            <CartItems key={i} collection={item} />
          ))}
        </div>
        <div className="w-[40%] h-full flex flex-col items-start justify-start   ">
          <div className="w-[70%] h-[85%] rounded-[15px] border border-black flex flex-col items-start justify-start p-[40px] ">
            <h1 className="text-[22px] text-black font-semibold">Delivery</h1>
            <h1 className="text-[15px] text-black font-normal mt-4">
              Deliverydate : June 25
            </h1>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            <h1 className="text-[22px] text-black font-semibold mt-4">
              Subtotal
            </h1>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">
                Net Amount
              </h1>
              <h1 className="text-[15px] text-black font-normal ">
                ${totalAmount}
              </h1>
            </div>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Discount</h1>
              <h1 className="text-[15px] text-black font-normal ">
                {discount}%
              </h1>
            </div>
            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Delivery</h1>
              <h1 className="text-[15px] text-black font-normal ">$2</h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>

            <div className="w-[80%] h-[7%] flex flex-row items-center justify-between  mt-2">
              <h1 className="text-[15px] text-black font-normal ">Total</h1>
              <h1 className="text-[15px] text-black font-normal ">
                ₹{totalAmount ? totalAmount + 2 : "0"}
              </h1>
            </div>
            <div className="w-[80%] h-[1px] border-dashed border border-black mt-2"></div>
            <div
            onClick={() => {
              if (totalAmount > 10) {
                router.push("/checkout");
              } else {
                return;
              }
            }}
              className="w-[60%] h-[10%] bg-black rounded-[10px] flex flex-row items-center justify-center mt-8 ml-8"
            >
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

export default Cart;
