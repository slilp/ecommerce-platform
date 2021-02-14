import React from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";

function DeleteProductCart({ productId }) {

  const dispatch = useDispatch();

  const deleteCart = () => {
    dispatch({
      type: "DELETE_CART",
      payload: {
        productId: productId,
      },
    });
    message.success("ลบสินค้าเเล้ว", 3);
  };

  return (
    <>
      <span className="text-red-400 cursor-pointer px-1" onClick={deleteCart}>
        <i class="fas fa-trash-alt px-1"></i> ลบ
      </span>
    </>
  );
}

export default DeleteProductCart;
