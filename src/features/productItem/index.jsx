import React from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

function ProductItem(props) {
  return (
    <>
      <Link to={`/p/${props.id}`} className="m-1">
        <div className="h-full flex relative   md:w-3/4  lg:w-56 h-64 flex-col mx-auto justify-center cursor-pointer transform hover:-translate-y-1  bg-gray-100  hover:shadow-md  rounded-lg">
          <div className="relative bg-green-500 h-36 rounded-lg">
            <img className="w-full h-full rounded-lg" src={props.image}></img>
            <div className="absolute text-lg top-2 right-2">
              <div className="bg-yellow-500 h-5 w-20"></div>
            </div>
          </div>
          <div className="h-24">
            <p className="text-lg bold p-2 pb-0 break-words"> {props.name}</p>
          </div>
          <hr></hr>
          <p className="p-2 text-xl text-green-900">{parseFloat(props.netPrice).toFixed(2)}</p>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
