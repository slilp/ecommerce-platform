import React, { useState, useEffect, useRef } from "react";
import cart from "../../common/icon/cart.svg";
import { Link } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "../../storage/token";
import { getCustomerInfo, removeCustomerInfo } from "../../storage/info";
import { useSelector } from "react-redux";
import NavBarMobile from "./navMobile";
import useDetectOutsideClick from "../../common/components/useDetectOutsideClick";

function NavBar(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState({ name: "", image: "" });
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const cartList = useSelector((state) => state.cart);

  useEffect(() => {
    if (getAccessToken()) {
      setIsLogin(true);
      setInfo({
        name: getCustomerInfo(),
      });
    }
  }, [isLogin]);

  const onClick = () => setIsActive(!isActive);

  const logOut = () => {
    removeAccessToken();
    removeCustomerInfo();
    window.location.reload();
  };

  return (
    <>
      <div className="lg:fixed lg:block bg-white  pt-4 lg:p-4 lg:shadow w-full z-50 hidden">
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
                <div class="relative inline-block">
                  <button
                    onClick={onClick}
                    className="text-white mt-2 text-lg bg-pink-500 hover:opacity-70 shadow-md focus:outline-none p-2 rounded"
                  >
                    <i className="fas fa-users mx-1"></i>
                    {info.name}
                  </button>

                  {isActive && (
                    <div
                      ref={dropdownRef}
                      className="origin-top-right absolute text-center right-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div className="py-1">
                        <Link
                          to="/history"
                          onClick={onClick}
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          รายการสั่งซื้อ
                        </Link>
                        <a onClick={logOut} class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          ออกจากระบบ
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {!isLogin && (
                <Link to="/login">
                  <button className="text-white mt-2 text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                    <i className="fas fa-users mr-2"></i>
                    เข้าสู่ระบบ
                  </button>
                </Link>
              )}
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
      <NavBarMobile 
      isLogin={isLogin} 
      name={info.name}
      cartList={cartList}
      isActive={isActive}
      dropdownRef={dropdownRef}
      logOut={logOut}
      onClick={onClick}>
      </NavBarMobile>
    </>
  );
}


export default NavBar;
