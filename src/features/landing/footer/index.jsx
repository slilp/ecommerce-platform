import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-white to-pink-200  mt-10 text-center p-10">
      <h1 className="text-3xl text-indigo-900">อย่ารอช้า</h1>
      <h1 className="text-2xl text-indigo-900">
        เลือกกลุ่ม Marketplace ที่คุณสนใจเเละเลือกซื้อสินค้าได้เลยทันที !
      </h1>
      <Link to="/marketplace">
        <button className="text-white text-lg bg-pink-500 hover:bg-pink-400 shadow-md focus:outline-none p-2 rounded">
          <i className="fas fa-shopping-bag mr-2"></i>
          เริ่มเลย
        </button>
      </Link>
    </div>
  );
}

export default Footer;
