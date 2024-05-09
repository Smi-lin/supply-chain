"use client";
import React from "react";



const LandingPage = () => {
  return (
    <header
      className="h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(https://www.frost.com/wp-content/uploads/2022/02/Supply_Chain.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <div className="container text-center pt-25 ">
        <h2 className="text-[3rem] text-black mb-[10px]">Welcome To</h2>
        <h1 className="font-semibold text-3xl">Chain Supply</h1>
        <p className="text-[20px] mt-4 text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
          fugit? Doloremque deserunt ipsum eaque, <br /> dolor tempore, minima
          nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi
          ratione expedita! Porro, ut. <br/>
          nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi
          ratione expedita! Porro, ut.
        </p>

       
      </div>
    </header>
  );
};

export default LandingPage;
