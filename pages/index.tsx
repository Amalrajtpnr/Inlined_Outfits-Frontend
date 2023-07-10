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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router=useRouter()

  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className="w-[100%] min-h-[85%]   flex flex-col items-center justify-start  relative ">
        <div className="w-full h-[90%]   bg-black">
          <div className="w-[50%] h-full flex flex-col items-start justify-center px-[120px] ml-16">
            <h1 className="text-[65px] text-white font-museo tracking-wider">
              Fashion Up Your Looks
            </h1>
            <h1 className="text-[15px]  text-white font-light tracking-wider">
              Discover Your Style and Unleash Your Confidence with Our Stunning
              Collection of Dresses!
            </h1>
            <div onClick={()=>{router.push("/shop")}} className="w-[35%] h-[7%] rounded-[10px] flex flex-col items-center justify-center  cursor-pointer bg-white mt-6">
              <h1 className="text-[15px]  text-black font-medium ">Shop Now</h1>
            </div>
          </div>
          <img
            src="/ezgif 1.svg"
            className="w-[55%] h-[100%] absolute top-0 right-0 "
            alt=""
          />
        </div>
      </div>
      <LatestTrends />
      <About/>
      <Footer/>
    </div>
  );
}
