import React, { useState, useEffect } from "react";
import cart from "../../common/icon/cart.svg";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../storage/token";
import { getCustomerInfo } from "../../storage/info";
import { useSelector } from "react-redux";
import NavBarMobile from "./navMobile";
import DropDownNavMenu from "./dropdown";

function NavBar(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState({ name: "", image: "" });
  const cartList = useSelector((state) => state.cart);
  const pageShortCut = useSelector((state) => state.page);

  useEffect(() => {
    if (getAccessToken()) {
      setIsLogin(true);
      setInfo({
        name: getCustomerInfo(),
      });
    }
  }, [isLogin]);

  return (
    <>
      <div className="lg:fixed lg:block bg-white  pt-4 lg:p-4 lg:shadow w-full z-50 hidden">
        <div className="container mx-auto pl-3 pr-3 ">
          <div className="hidden  lg:flex flex-wrap justify-between items-center ">
            <div className="flex space-x-5">
              <div className="flex space-x-5">
                <Link to="/">
                  <p className="text-black text-2xl pt-1 mb-0">MarketKub</p>
                  {/* <img
                    src={
                      "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
                    }
                    className="w-24"
                  ></img> */}
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
                <Link
                  to={pageShortCut.page}
                  className="text-indigo-900 px-3 py-2 text-lg  hover:text-indigo-400"
                >
                  {pageShortCut.label}
                </Link>
              </div>
            </div>
            <div className="flex space-x-7">
              <Link to="/cart">
                <div className="rounded-full bg-yellow-500 h-5 w-5 flex items-center justify-center mx-auto">
                  <span className="absolute z-20 text-white text-md">
                    {cartList.length}
                  </span>
                </div>
                <img src={cart} className="w-8 cursor-pointer z-0"></img>
              </Link>
              {isLogin && (
                <DropDownNavMenu name={info.name}></DropDownNavMenu>
              )}
              {!isLogin && (
                <Link to="/login">
                  <button className="text-white mt-2 text-lg bg-pink-500 hover:bg-pink-400 shadow-md focus:outline-none p-2 rounded">
                    <i className="fas fa-users mr-2"></i>
                    เข้าสู่ระบบ
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-wrap justify-center items-center mb-3 lg:hidden mt-1">
            <img
              src={
                "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
              }
              className="w-24"
            ></img>
      </div> */}
      <NavBarMobile 
      name={info.name}
      cartList={cartList}
      isLogin={isLogin}
      shortCut={pageShortCut}
      >
      </NavBarMobile>
    </>
  );
}


export default NavBar;
