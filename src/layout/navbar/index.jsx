import React from "react";
import cart from "../../common/icon/cart.svg";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <>
      <div className="lg:fixed bg-white  pt-4 lg:p-4 lg:shadow w-full z-50">
        <div className="container mx-auto pl-3 pr-3 ">
          <div className="hidden  lg:flex flex-wrap justify-between items-center ">
            <div className="flex space-x-5 align-middle">
              <div className="flex space-x-5 align-middle">
                <Link to="/">
                  <img
                    src={
                      "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
                    }
                    className="w-24"
                  ></img>
                </Link>
                <Link
                  to="/"
                  className="text-indigo-900 px-3 py-2 text-lg  hover:text-indigo-400"
                >
                  หน้าเเรก
                </Link>
                <Link
                  to="/marketplace"
                  className="text-indigo-900 px-3 py-2 text-lg  hover:text-indigo-400"
                >
                  Market
                </Link>
              </div>
            </div>
            <div></div>
            <div className="flex space-x-7">
              <Link to="/cart">
                <img src={cart} className="w-8 cursor-pointer"></img>
              </Link>
              <Link to="/login">
                <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                  <i className="fas fa-users mr-2"></i>
                  เข้าสู่ระบบ
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-3 lg:hidden">
            <img
              src={
                "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
              }
              className="w-24"
            ></img>
          </div>
        </div>
      </div>
      <NavBarMobile></NavBarMobile>
    </>
  );
}

function NavBarMobile() {
  return (
    <div className="sticky top-0 bg-white p-3 shadow w-full lg:hidden z-50">
      <div className="container mx-auto pl-3 pr-3 ">
        <div className="flex  flex-wrap justify-between items-center ">
          <div className="flex space-x-5 align-middle">
            <Link to="/" className="text-blue-900 px-3 py-2 text-base">
              หน้าเเรก
            </Link>
            <Link to="/marketplace" className="text-blue-900  py-2 text-base">
              Market
            </Link>
          </div>
          <div></div>
          <div className="flex space-x-5">
            <Link to="/cart">
              <img src={cart} className="w-6 mt-2 cursor-pointer"></img>
            </Link>
            <Link to="/login">
              <button className="text-white text-base bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                <i className="fas fa-users mx-1"></i>
                เข้าสู่ระบบ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
