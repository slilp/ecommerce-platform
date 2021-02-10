import React from "react";
import { InputNumber } from "antd";

function ProductItemCart(props) {
  return (
    <div className="p-2 bg-gray-100 w-full grid grid-cols-3 items-center my-2">
      <img
        className="md:w-1/2 w-4/5 mx-auto"
        src={props.productImg}
      ></img>
      <span className="text-lg px-2">
        {props.productName}
      </span>
      <div className="text-center">
        <span className="text-md mx-2">{props.productPrice}x{props.productQty} </span><span>{props.productPrice*props.productQty} บาท</span>
        <br></br>
        <br></br>
        <InputNumber min={1} max={100000} defaultValue={props.productQty} />
        <br></br>
        <br></br>
        <span className="text-red-400 cursor-pointer px-1">
          <i class="fas fa-trash-alt px-1"></i> ลบ
        </span>
      </div>
    </div>
  );
}

export default ProductItemCart;
