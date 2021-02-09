import React from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

function ProductItem(props) {
  return (
    <div className="flex flex-col space-y-1 justify-center cursor-pointer transform hover:-translate-y-1  bg-gray-100 m-1 hover:shadow-md  rounded-lg	">
      <div className="relative max-w-xs ">
        <img className="w-full h-40 lg:h-44 rounded-lg" src={props.image}></img>
        <div className="absolute text-lg top-2 right-2">
          <div className="bg-yellow-500 h-5 w-20"></div>
        </div>
      </div>
      <p className="text-xl bold p-2 pb-0"> {props.name}</p>
      <p className="p-2 pt-0 text-md">{props.desc} </p>
      <hr></hr>
      <p className="p-2 text-xl text-green-900">{props.price}</p>
    </div>
  );
}

export default ProductItem;
