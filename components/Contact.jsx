import React from "react";
import heroBanner from "/images/shoe_image.png";

const Contact = () => {
  return (
    <>
      <div className="flex justify-around items-center px-10 py-3 min-h-[calc(100vh-72px)] hero-main">
        <div className="right">
          <img src={heroBanner} alt="Hero Banner" />
        </div>
      </div>
    </>
  );
};

export default Contact;
