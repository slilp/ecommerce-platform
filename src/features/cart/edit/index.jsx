import React from "react";
import { useDispatch } from "react-redux";
import { InputNumber } from "antd";

function EditProductQuantity({ productQty, productId }) {
  const dispatch = useDispatch();

  const editCart = (value) => {
    if (value == null) {
      dispatch({
        type: "UPDATE_CART",
        payload: {
          productId: productId,
          quantity: 1,
        },
      });
    } else {
      dispatch({
        type: "UPDATE_CART",
        payload: {
          productId: productId,
          quantity: value,
        },
      });
    }
  };

  return (
    <>
      <InputNumber
        min={1}
        max={100}
        defaultValue={productQty}
        onChange={editCart}
        type="number"
      />
    </>
  );
}

export default EditProductQuantity;
