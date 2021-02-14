import React from "react";
import DeleteProductCart from "../delete";
import EditProductQty from "../edit";

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
        <EditProductQty
        productQty={props.productQty}
        productId={props.id}
        ></EditProductQty>
        <br></br>
        <br></br>
        <DeleteProductCart
          productId={props.id}
        ></DeleteProductCart>
      </div>
    </div>
  );
}

export default ProductItemCart;
