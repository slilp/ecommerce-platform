import React, { useState, useEffect } from "react";
import cart from "../../common/icon/cart.svg";
import { Link } from "react-router-dom";
import { getAccessToken } from "../../storage/token";
import { getCustomerInfo } from "../../storage/info";

function NavBar(props) {
  const [isLogin, setIsLogin] = useState(false);
  const [info, setInfo] = useState({ name: "", image: "" });

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
                <img src={cart} className="w-8 cursor-pointer"></img>
              </Link>
              {isLogin && (
                <Link to="/">
                  <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                    <i className="fas fa-users mr-2"></i>
                    {info.name}
                  </button>
                </Link>
              )}
              {!isLogin && (
                <Link to="/login">
                  <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
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
      <NavBarMobile isLogin={isLogin} name={info.name}></NavBarMobile>
    </>
  );
}

function NavBarMobile({ isLogin, name }) {
  return (
    <div className="sticky top-0 bg-white shadow p-3 w-full lg:hidden z-50 m-0">
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
            {isLogin && (
              <Link to="/login">
                <button className="text-white text-base bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                  <i className="fas fa-users mx-1"></i>
              
                </button>
              </Link>
            )}
            {!isLogin && (
              <Link to="/login">
                <button className="text-white text-base bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                  <i className="fas fa-users mx-1"></i>
                  เข้าสู่ระบบ
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
