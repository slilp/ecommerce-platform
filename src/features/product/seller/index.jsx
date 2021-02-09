import React from "react";

function Seller() {
  const sellerInfo = {
    name: "นาย สลิล พ่วงพุ่ม",
    profileImg:
      "https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432",
    line: "",
    facebook: "",
    tel: "0875006783",
  };

  return (
    <div className="rounded p-5 break-words">
      <p className="text-xl">ผู้ขาย</p>
      <p className="text-lg bg-gray-100 p-5 md:w-1/2 text-center text-yellow-700">
        <img
          src={sellerInfo.profileImg}
          className="h-20 w-20 rounded-full cursor-pointer hover:opacity-80"
        ></img>
        {sellerInfo.name}
      </p>

      <p className="text-lg">การติดต่อ</p>
      <div className="flex items-center  space-x-4">
        <a href="https://www.w3schools.com" target="_blank">
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111498.png"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <a href="https://www.w3schools.com" target="_blank">
          <img
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <a href="tel:+0875006783">
          <img
            src="https://icon-library.com/images/phone-icon-circle/phone-icon-circle-12.jpg"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <span className="text-lg">087-500-6783</span>
      </div>
    </div>
  );
}

export default Seller;
