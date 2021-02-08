import React from "react";
import PaymentChannel from "./paymentChannel";

function Checkout() {
  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">กรุณาเลือกช่องทางการชำระเงิน</h1>
      <br></br>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="md:w-1/2">
          <h1 className="text-xl">
            <i className="fas fa-money-bill-wave px-2"></i>ช่องทางการชำระเงิน
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2">
            <PaymentChannel></PaymentChannel>
            <PaymentChannel></PaymentChannel>
            <PaymentChannel></PaymentChannel>
            <PaymentChannel></PaymentChannel>
            <PaymentChannel></PaymentChannel>
          </div>
          <br></br>
          <hr></hr>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-2">
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
              <i className="fas fa-money-bill mr-2"></i>
              ชำระเงิน
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
