import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-200  mt-10 text-center p-10">
      <h1 className="text-3xl text-indigo-900">ให้ edverest ช่วยคุณ</h1>
      <h1 className="text-2xl text-indigo-900">
        เพื่อเจอทุนที่เราแนะนำสำหรับคุณ พร้อมระบบติดตามและสมัครทุนในอนาคต !
      </h1>
      <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
        <i className="fas fa-users mr-2"></i>
        เริ่มเลย
      </button>
    </div>
  );
}

export default Footer;
