import React from "react";
import landingBg from "../../../common/img/landing-main-top.jpg";


function Header() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-1 justify-center text-center lg:text-left mt-10">
          <div>
            <h1 className="lg:text-6xl text-4xl font-extrabold">E-commerce</h1>
            <h1 className="lg:text-6xl text-4xl font-extrabold lg:pl-16">
              <i className="fas fa-plus-circle px-3 text-pink-500"></i>
            </h1>
            <h1 className="lg:text-6xl text-4xl font-extrabold">Marketplace</h1>
            <h1 className="lg:text-2xl text-xl">
              ค้นหา Market เเล้วไปช๊อปกันเลย !
            </h1>
            <div className="mb-4">
              <input
                maxLength="25"
                className="text-lg border py-2 px-3 text-grey-darkest border-gray-500"
              ></input>
            </div>
            <button className="text-white text-lg bg-pink-500 hover:bg-pink-400 shadow-md focus:outline-none p-2 rounded">
              <i className="fas fa-shopping-bag mr-2"></i>
              ค้นหา Market
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img src={landingBg} className="w-2/3"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
