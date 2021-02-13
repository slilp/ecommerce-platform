import React from "react";

function Seller({ sellerInfo }) {


  return (
    <div className="rounded p-5 break-words">
      <p className="text-xl">ผู้ขาย</p>
      <p className="text-lg bg-gray-100 p-5 md:w-1/2 text-center text-yellow-700">
        <img
          src={
            sellerInfo.profileImagePath ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYLLQm52fRCLlUXdlb4_C728SDu_2qobCKw&usqp=CAU"
          }
          className="h-20 w-20 rounded-full cursor-pointer hover:opacity-80"
        ></img>
        {sellerInfo.firstName} {sellerInfo.lastName}
      </p>

      <p className="text-lg">การติดต่อ</p>
      <div className="flex items-center  space-x-4">
        <a href={sellerInfo.line} target="_blank">
          <img
            src="https://image.flaticon.com/icons/png/128/2111/2111498.png"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <a href={sellerInfo.facebook} target="_blank">
          <img
            src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <a href={sellerInfo.mobile}>
          <img
            src="https://icon-library.com/images/phone-icon-circle/phone-icon-circle-12.jpg"
            className="h-10 w-10 cursor-pointer hover:opacity-80"
          ></img>
        </a>
        <span className="text-lg">{sellerInfo.mobile}</span>
      </div>
    </div>
  );
}

export default Seller;
