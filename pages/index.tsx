import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import LatestTrends from "../components/LatestTrends";
import About from "../components/About";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const [products, setProducts] = useState<any>([]);

  const getProducts = async () => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/products`, {
        headers: {
          method: "GET",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-[100%] min-h-[85%]   flex flex-col items-center justify-start   ">
        <div className="w-full lg:h-[90%] sm300:h-[100%]  flex lg:flex-row sm300:flex-col-reverse items-center lg:justify-start sm300:justify-between  bg-black">
          <div className="lg:w-[50%]  sm300:w-full lg:h-full sm300:h-[50%] flex flex-col lg:items-start sm300:items-center justify-center lg:px-[120px] sm300:ml-0 sm300:p-9 lg:ml-16">
            <h1 className="lg:text-[65px] sm300:text-[40px] sm300:text-center lg:text-left text-white font-MuseoModerno tracking-wider">
              Fashion Up Your Looks
            </h1>
            <h1 className="text-[15px] sm300:text-center lg:text-left text-white font-light tracking-wider">
              Discover Your Style and Unleash Your Confidence with Our Stunning
              Collection of Dresses!
            </h1>
            <div
              onClick={() => {
                router.push("/shop/productDetails");
              }}
              className="lg:w-[35%] sm300:w-[40%] lg:h-[7%] sm300:h-[12%] rounded-[10px] flex flex-col items-center justify-center  cursor-pointer bg-white mt-6"
            >
              <h1 className="text-[15px]  text-black font-medium ">Shop Now</h1>
            </div>
          </div>
          <div className="lg:w-[50%] sm300:w-full lg:h-full sm300:h-[50%]  flex flex-col items-center justify-center relative">
            <div className="h-[30px] w-[30px] rounded-full bg-white -ml-16 shadow-ds "></div>

            <img
              src="/ezgif 1.svg"
              className="w-[100%] h-[100%] absolute lg:top-7  "
              alt=""
            />
          </div>
        </div>
      </div>
      <LatestTrends products={products} />
      <About />
      <Footer />
    </div>
  );
}
