import React from "react";
import { InputNumber } from "antd";

function ProductItemCart() {
  return (
    <div className="p-2 bg-gray-100 w-full grid grid-cols-3 items-center my-2">
      <img
        className="md:w-1/2 w-4/5 mx-auto"
        src="https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg"
      ></img>
      <span className="text-md px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quod
        repellendus.
      </span>
      <div className="text-center">
        <span className="text-md">300</span>
        <br></br>
        <br></br>
        <InputNumber min={1} max={100000} defaultValue={3} />
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
