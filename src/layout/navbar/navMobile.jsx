import { Link } from "react-router-dom";
import cart from "../../common/icon/cart.svg";
import DropDownNavMenu from "./dropdown";

function NavBarMobile({ name , cartList , isLogin , shortCut}) {
    
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
              {/* <Link
                  to={shortCut.page}
                  className="text-indigo-900 px-3 py-2 text-lg  hover:text-indigo-400"
                >
                  {shortCut.label}
                </Link> */}
            </div>
            <div></div>
            <div className="flex space-x-5">
              <Link to="/cart">
                <div className="rounded-full bg-yellow-500 h-5 w-5 flex items-center justify-center mx-auto">
                  <span className="absolute z-20 text-white text-md">
                    {cartList.length}
                  </span>
                </div>
                <img src={cart} className="w-8 cursor-pointer z-0"></img>
              </Link>
              {isLogin && (
                <DropDownNavMenu name={name} channel="mobile"></DropDownNavMenu>
              )}
              
              {!isLogin && (
                <Link to="/login">
                  <button className="text-white text-base mt-2 bg-pink-500 hover:bg-pink-400 shadow-md focus:outline-none p-2 rounded">
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

  export default NavBarMobile;