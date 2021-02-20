import React, { useRef } from "react";
import useDetectOutsideClick from "../../../common/components/useDetectOutsideClick";
import { removeAccessToken } from "../../../storage/token";
import { removeCustomerInfo } from "../../../storage/info";
import { Link } from "react-router-dom";

function DropDownNavMenu({ name, channel }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const logOut = () => {
    removeAccessToken();
    removeCustomerInfo();
    window.location.reload();
  };

  return (
    <div class="relative inline-block">
      <button
        onClick={onClick}
        className="text-white mt-2 text-lg bg-pink-500 hover:opacity-70 shadow-md focus:outline-none p-2 rounded"
      >
        <i className="fas fa-users mx-1"></i>
        {channel != "mobile" && <span> {name}</span>}
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
            <a
              onClick={logOut}
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              ออกจากระบบ
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropDownNavMenu;
