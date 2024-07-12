import React from "react";
import flipkart from "/images/flipkart.png";
import amazon from "/images/amazon.png";
import heroBanner from "/images/shoe_image.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-around items-center px-10 py-3 min-h-[calc(100vh-72px)] hero-main">
        <div className="left">
          <h1 className="items-center font-bold text-[100px] leading-[102px]">
            YOUR FEET DESERVE <br></br> THE BEST
          </h1>
          <p className="flex justify-center items-center py-1 w-96 text-[#5A5959]">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex gap-5 order-buttons">
            <button className="bg-red-700 px-5 w-[150px] h-[41px] text-white">
              Shop Now
            </button>
            <button className="border-2 px-3 w-[141px] h-[41px]">
              Category
            </button>
          </div>
          <div className="py-1 available-too">
            <p>Also Available on</p>
            <div className="flex gap-5 py-2 links">
              <a href="#">
                <img src={flipkart} alt="Flipkart" />
              </a>
              <a href="#">
                <img src={amazon} alt="Amazon" />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={heroBanner} alt="Hero Banner" />
        </div>
      </div>
    </>
  );
};

export default Hero;
