import React from "react";
import { Link } from "react-router-dom";
import Tag from "./tag";

function ProductItem(props) {
  return (
    <>
      <Link to={`/p/${props.id}`} className="m-1">
        <div className="h-full flex relative   md:w-3/4  lg:w-52 h-64 flex-col mx-auto justify-center cursor-pointer transform hover:-translate-y-1  bg-gray-100  hover:shadow-md  rounded-lg">
          <div className="relative bg-green-500 h-36 rounded-lg">
            <img className="w-full h-full rounded-lg" src={props.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDYLLQm52fRCLlUXdlb4_C728SDu_2qobCKw&usqp=CAU"}></img>
            <div className="absolute top-2 right-2">
              <Tag
              status={props.promotionCode1}
              ></Tag>
            </div>
            <div class="absolute left-2 top-2">
              <Tag
              status={props.promotionCode2}
              ></Tag>
            </div>
          </div>
          <div className="h-24">
            <p className="text-lg bold p-2 pb-0 break-words"> {props.name}</p>
          </div>
          <hr></hr>
          <p className="p-2 text-xl text-green-900">
            {parseFloat(props.netPrice).toFixed(2)}
          </p>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
