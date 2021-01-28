import React from "react";

function Head() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div className="flex flex-1 justify-center text-center sm:text-left mt-10">
          <div>
            <h1 className="lg:text-3xl text-2xl">
              E-commerce รูปเเบบใหม่ได้เเล้ววันนี้
            </h1>
            <h1 className="lg:text-3xl text-2xl">
              ค้นหาร้านค้าที่ใช่สำหรับคุณ
            </h1>
            <div className="mb-4">
              <input className="border py-2 px-3 text-grey-darkest"></input>
            </div>
            <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
              <i className="fas fa-users mr-2"></i>
              ค้นหาร้านค้า
            </button>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={
              "https://image.freepik.com/free-vector/launching-concept-illustration_114360-1731.jpg"
            }
            className="w-2/3"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Head;
