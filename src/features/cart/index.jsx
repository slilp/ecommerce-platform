import React from "react";
import ProductItemCart from './product';

function Cart() {
  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">ตะกร้าสินค้าของคุณ</h1>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="lg:w-2/3 md:w-1/2">
            <h1 className="text-xl border-b-2 border-red-500 p-2">
              รายการของคุณ
            </h1>
            <ProductItemCart></ProductItemCart>
            <ProductItemCart></ProductItemCart>
            <ProductItemCart></ProductItemCart>
            <ProductItemCart></ProductItemCart>
        </div>
        <div className="lg:w-1/4 md:w-1/2 px-2">
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
            <button className="text-white text-lg bg-green-400 hover:bg-green-600 border-0 focus:border-0 cursor-pointer  py-2 w-full rounded">
              <i className="fas fa-arrow-right mr-2"></i>
              ต่อไป
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
