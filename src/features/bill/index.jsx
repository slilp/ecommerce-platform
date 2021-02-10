import { PreviousMap } from "postcss";
import React from "react";
import { Link } from "react-router-dom";

function Bill(props) {
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
        <span className="text-md float-right">300 บาท</span>
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
        <span className="text-lg float-right">300 บาท</span>
      </p>
      <br></br>
      <Link to={props.next}>
        <button className="text-white text-lg bg-green-400 hover:bg-green-600 border-0 focus:border-0 cursor-pointer  py-2 w-full rounded">
          <i className="fas fa-money-bill mr-2"></i>
          {word[props.step]}
        </button>
      </Link>
    </div>
  );
}

export default Bill;
