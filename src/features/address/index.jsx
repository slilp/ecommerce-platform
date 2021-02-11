import React from "react";
import AddAddress from "./add";
import Bill from "../bill";

function Address() {
  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">ที่อยู่จัดส่งของคุณ</h1>
      <br></br>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="md:w-1/2">
          <h1 className="text-xl">
            <i className="fas fa-map-marker-alt px-2"></i>ที่อยู่จัดส่งที่เลือก
          </h1>
          <div className="bg-gray-100 p-5">
            <p className="font-bold">บ้าน</p>
            <p>นาย สลิล พ่วงพุ่ม</p>
            <p>
              99/89 ซ.สิทธิชัย ถ.กรุงเทพ-นนทบุรี เเขวง วงศ์สว่าง เขต บางซื่อ
              กทม.10800
            </p>
          </div>
          <br></br>
          <hr></hr>
          <br></br>

          <h1 className="text-xl">
            <i className="fas fa-map-marker-alt px-2"></i>เลือกที่อยู่อื่นๆ
          </h1>
          <br></br>

          <h1 className="text-lg">
            ที่อยู่อื่นๆ <span className="text-sm">(สูงสุด 3 เเห่ง)</span>
          </h1>
          <div className="bg-gray-100 p-5 cursor-pointer border-4 border-blue-300">
            <p className="font-bold">บ้าน</p>
            <p>นาย สลิล พ่วงพุ่ม</p>
            <p>
              99/89 ซ.สิทธิชัย ถ.กรุงเทพ-นนทบุรี เเขวง วงศ์สว่าง เขต บางซื่อ
              กทม.10800
            </p>
          </div>
          <div className="bg-gray-100 p-5 cursor-pointer my-2">
            <p className="font-bold">ที่ทำงาน</p>
            <p>นาย สลิล พ่วงพุ่ม</p>
            <p>
              99/89 ซ.สิทธิชัย ถ.กรุงเทพ-นนทบุรี เเขวง วงศ์สว่าง เขต บางซื่อ
              กทม.10800
            </p>
          </div>
          <br></br>
          <div className="text-center text-lg cursor-pointer">
            <span>
              <i class="fas fa-plus-square text-2xl px-2"></i>{" "}
              เพิ่มที่อยู่จัดส่ง
            </span>
          </div>
          <br></br>
          <div>
            <AddAddress></AddAddress>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-2">
          <Bill
          step="address"
          next="/checkout"
          ></Bill>
        </div>
      </div>
    </div>
  );
}

export default Address;
