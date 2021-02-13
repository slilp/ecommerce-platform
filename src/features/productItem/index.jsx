import React from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

function ProductItem(props) {
  return (
    <div className="flex w-80 lg:w-56 h-64 flex-col  justify-center cursor-pointer transform hover:-translate-y-1  bg-gray-100 m-1 hover:shadow-md  rounded-lg p-2">
      {/* <div className="relative max-w-xs ">
        <img className="w-full h-40 lg:h-44 rounded-lg" src={props.image}></img>
        <div className="absolute text-lg top-2 right-2">
          <div className="bg-yellow-500 h-5 w-20"></div>
        </div>
      </div>
      {/* <p className="text-xl bold p-2 pb-0 break-words"> {props.name}</p> */}
      {/* <p className="p-2 pt-0 text-md">{props.desc} </p> */}
      {/* <p className="text-xl bold p-2 pb-0">ดกดกกดหก</p>
      <hr></hr>
      <p className="p-2 text-xl text-green-900">{props.netPrice}</p> */} */}
    </div>
  );
}

export default ProductItem;
