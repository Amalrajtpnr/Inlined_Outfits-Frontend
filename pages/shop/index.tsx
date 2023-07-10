import React from "react";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

function Shop() {
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-start overflow-y-scroll overflow-hidden scrollbar-hide">
      <Navbar />
      <div className='className="w-full h-full grid grid-cols-4 place-content-start place-items-center overflow-y-scroll scrollbar-hide pt-5 box-border gap-x-6 gap-y-6"'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Shop;
