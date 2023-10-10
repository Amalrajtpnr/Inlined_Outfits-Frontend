import React from "react";
import Navbar from "../../components/Navbar";
import Colour from "../../components/Colour";
import Size from "../../components/Size";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TypeOfSpec from "../../components/TypeOfSpec";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function ShopItem({ productId }: { productId: any }) {
  const router=useRouter()
  const [selectedSize, setSelectedSize] = useState<string | null>("");

  const [collection, setCollection] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<any>({});
  const [error, seterror] = useState<Boolean>(false);

  const handleClickSizeButton = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null);
    } else {
      setSelectedSize(size);
    }
  };

  const handleClickSizeColor = (color: any) => {
    if (selectedColor === color) {
      setSelectedColor({});
    } else {
      setSelectedColor(color);
      console.log(color);
    }
  };

  function addToCart(
    event: React.MouseEvent<HTMLDivElement>,
    productId: string
  ) {
    const user = JSON.parse(localStorage.getItem("user")!);
  console.log(user._id)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        email: user.email,
        color: selectedColor,
        size: selectedSize,
        quantity,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data.error) {
          router.push("/cart")
          seterror(false)
        } else {
          console.error("Error from server:", data.error);
          seterror(true)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    event.preventDefault();
  }
  
  function buy(
    event: React.MouseEvent<HTMLDivElement>,
    productId: string
  ) {
    const user = JSON.parse(localStorage.getItem("user")!);
  console.log(user._id)
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cart/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        email: user.email,
        color: selectedColor,
        size: selectedSize,
        quantity,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (!data.error) {
          console.log(data);
          seterror(false)

        } else {
          console.error("Error from server:", data.error);
          seterror(true)


        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  
    event.preventDefault();
  }

  const getProduct = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/products/get?id=${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.error) {
        setCollection(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-[100%] h-[85%] flex flex-row items-center justify-center overflow-y-scroll scrollbar-hide">
        <div className="w-[50%] h-full  flex flex-col items-center justify-start ">
          <img src="/Rectangle 19.svg" className="w-[70%] h-[75%] " alt="" />
          <div className="w-[55%] h-[20%] flex flex-row items-center justify-start pl-[14px] box-border">
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%]" alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
            <img src="/Rectangle 19.svg" className="w-[15%] h-[45%] " alt="" />
          </div>
        </div>
        <div className="w-[50%] h-full  flex flex-col items-start justify-start ">
          <h1 className="text-2xl  text-black font-bold  tracking-wider">
            {collection?.name}
          </h1>
          <h1 className="text-[16px] text-[#000000a6] font-light my-1">
            {collection.description}
          </h1>
          <div className="w-full h-[8%] flex flex-row items-center justify-start ">
            <h1 className="font-medium text-[23px] ">
              {" "}
              $&nbsp;{collection?.price?.original}
            </h1>
            <h1 className="font-normal text-[15px] line-through text-[#00000094] ml-4">
              $&nbsp; Rs{" "}
              {Math.round(
                collection?.price?.original *
                  (100 / (100 - parseFloat(collection?.price?.offer)))
              )}
            </h1>
            <h1 className="font-medium text-[15px] text-[#FF0000] ml-4">
              {collection?.price?.offer}%off
            </h1>
          </div>

          <h1 className="text-[15px] font-medium mt-2     ">Colours</h1>
          <div className="h-[50px] w-[200px]  flex justify-between items-center my-2 ">
            {collection?.colors?.map((item: any, i: number) => (
              <Colour
                key={i}
                isActive={selectedColor == item}
                onClick={() => handleClickSizeColor(item)}
                colour={item.hexCode}
                colourName={item.name}
              />
            ))}
          </div>
          {!selectedColor && (
            <span className="text-[11px] font-medium text-red-500">
              colours and size are required
            </span>
          )}
          <h1 className="text-[15px] font-medium mt-2  ">Size</h1>
          <div className="h-[50px] w-[300px] flex flex-row justify-between items-center my-2 ">
            {collection?.sizes?.map((item: any, i: number) => (
              <Size
                key={i}
                isActive={selectedSize === item}
                onClick={() => handleClickSizeButton(item)}
                size={item}
              />
            ))}
            <div className="text-xs w-[100px]  ">Size Chart</div>
          </div>
          <h1 className="text-[15px] font-medium mt-2     ">Quantity</h1>
          <div className="h-[40px] w-[130px] p-4 flex justify-between items-center mb-6 my-2 border border-black rounded-lg ">
            <button
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              className="text-black text-[25px] font-[500] ml-1"
            >
              &#45;
            </button>
            <span className="text-black text-[18px] font-[500] ">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-black text-[25px] font-[500] mr-1"
            >
              +
            </button>
          </div>
          <div className="w-full min-h-[8%] mb-4 flex flex-row justify-start items-center ">
            <div
              onClick={(e) => addToCart(e, productId)}
              className="w-[20%] h-full bg-black rounded-[10px] flex flex-row justify-center items-center "
            >
              <AiOutlineShoppingCart size={20} color="white" />

              <h1 className="text-[12px]  text-white font-semibold ml-2">
                Add to Cart
              </h1>
            </div>
            <div  onClick={(e) => buy(e, productId)} className="w-[20%] h-full border-[1px] border-black rounded-[10px] flex flex-row justify-center items-center  ml-4">
              <h1 className="text-[12px]  text-black font-semibold ml-2">
                Buy Now
              </h1>
            </div>
          </div>
          {error && (
            <span className="text-[11px] font-medium text-red-500">
              color is required
            </span>
          )}
          <h1 className="text-[18px] font-medium mt-3     ">Specifications</h1>
          <div className="min-h-[300px] w-[70%]  mb-5">
            <div className="h-[100%] w-[100%] flex flex-col justify-start items-center">
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Type" SpecDetails="Round Neck" />
                <TypeOfSpec Spec="Size" SpecDetails="L" />
              </div>
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Sleeve" SpecDetails="Half Sleeve" />
                <TypeOfSpec
                  Spec="Fabric Care"
                  SpecDetails="Gentle Machine Wash"
                />
              </div>
              <div className="h-[25%] w-[100%] border-t-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Fit" SpecDetails="Slim" />
                <TypeOfSpec Spec="Net Quantity" SpecDetails={1} />
              </div>
              <div className="h-[25%] w-[100%] border-y-[1px] border-[#00000025] flex justify-start items-center">
                <TypeOfSpec Spec="Fabric" SpecDetails="Cotton" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.query.productId;

  return {
    props: {
      productId,
    },
  };
};
