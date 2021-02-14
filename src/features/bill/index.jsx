import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Bill(props) {
  const cartList = useSelector((state) => state.cart);

  const word = {
    checkout: "ชำระเงิน",
    address: "ต่อไป",
    cart: "ต่อไป",
  };

  return (
    <div className="border-2 border-gray-400  mx-auto p-5">
      <h1 className="text-xl border-b-2 border-red-500 p-2 text-center">
        สรุปรายการ
      </h1>
      <br></br>
      <p>
        <span className="text-md">
          <i className="fas fa-cart-arrow-down pr-2"></i> ราคาสินค้ารวม
        </span>
        <span className="text-md float-right">
          {cartList
            .map((val) => parseFloat(val.netPrice * val.quantity))
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2)}
        </span>
      </p>
      <hr></hr>
      <br></br>
      <p>
        <span className="text-md">
          <i className="fas fa-truck pr-2"></i>ค่าขนส่ง
        </span>
        <span className="text-md float-right">จัดส่งฟรี</span>
      </p>
      <hr></hr>
      <br></br>
      <p>
        <span className="text-lg font-bold">รวม</span>
        <span className="text-lg float-right">
          {cartList
            .map((val) => parseFloat(val.netPrice * val.quantity))
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2)}
          <span> บาท</span>
        </span>
      </p>
      <br></br>
      {cartList.length != 0 && (
        <Link to={props.next}>
          <button className="text-white text-lg bg-green-400 hover:bg-green-600 border-0 focus:border-0 cursor-pointer  py-2 w-full rounded">
            <i className="fas fa-money-bill mr-2"></i>
            {word[props.step]}
          </button>
        </Link>
      )}
    </div>
  );
}

export default Bill;
