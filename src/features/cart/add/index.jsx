import React from "react";
import { Button, message } from "antd";
import { useDispatch } from "react-redux";

function AddCartBtn({ id, name, img, qty, price }) {
  const dispatch = useDispatch();

  const addCart = () => {
    
    dispatch({
      type: "ADD_CART",
      payload: {
        productId: id,
        productName: name,
        productImage : img,
        quantity: qty,
        netPrice: price,
      },
    });

    message.success("เพิ่มสินค้าลงตะกร้าเเล้ว", 3);

  };

  return (
    <>
      <Button
        type="primary"
        shape="round"
        size={"large"}
        onClick={addCart}
        style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
      >
        ใส่ตะกร้า
      </Button>
    </>
  );
}

export default AddCartBtn;
