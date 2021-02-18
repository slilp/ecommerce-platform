import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { postJsonAuth } from "../../axios";
import { message } from "antd";

function Bill(props) {
  const cartList = useSelector((state) => state.cart);
  const history = useHistory();
  const dispatch = useDispatch();

  const [pay, setPay] = useState(false);

  const word = {
    checkout: "ชำระเงิน",
    address: "ต่อไป",
    cart: "ต่อไป",
  };

  const paymentNext = async () => {
    if (props.step == "checkout") {
      if (props.paymentChannel === 5) {
        setPay(true);
        const res = await postJsonAuth("/order/create", {
          orderDate: Date.now(),
          items: cartList.map((item) => {
            return {
              productId: item.productId,
              quantity: item.quantity,
            };
          }),
        });
        if (res.status == 200) {
          dispatch({
            type: "DELETE_ALL_CART",
          });
          history.push(props.next);
        } else {
          message.error("เกิดข้อผิดพลาดกรุณาลองดูใหม่", 3);
        }
      } else {
        message.error("ช่องทางการชำระเงินนี้ยังไม่เปิดใช้งาน", 3);
      }
    } else {
      history.push(props.next);
    }
  };

  return (
    <div className="border-2 border-gray-400  mx-auto p-5">
      <h1 className="text-xl border-b-2 border-red-500 p-2 text-center">
        สรุปรายการ
      </h1>
      <br></br>
      <p>
        <span className="text-md">
          <i className="fas fa-cart-arrow-down pr-2"></i> ราคาสินค้ารวม
        </span>
        <span className="text-md float-right">
          {cartList
            .map((val) => parseFloat(val.netPrice * val.quantity))
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2)}
        </span>
      </p>
      <hr></hr>
      <br></br>
      <p>
        <span className="text-md">
          <i className="fas fa-truck pr-2"></i>ค่าขนส่ง
        </span>
        <span className="text-md float-right">จัดส่งฟรี</span>
      </p>
      <hr></hr>
      <br></br>
      <p>
        <span className="text-lg font-bold">รวม</span>
        <span className="text-lg float-right">
          {cartList
            .map((val) => parseFloat(val.netPrice * val.quantity))
            .reduce((acc, val) => acc + val, 0)
            .toFixed(2)}
          <span> บาท</span>
        </span>
      </p>
      <br></br>
      {cartList.length != 0 && (
        <button
          onClick={paymentNext}
          className="text-white text-lg bg-green-400 hover:bg-green-600 border-0 focus:border-0 cursor-pointer  py-2 w-full rounded"
        >
          <i className="fas fa-money-bill mr-2"></i>
          {word[props.step]}
        </button>
      )}
      {pay && <Payment></Payment>}
    </div>
  );
}

function Payment() {
  return (
    <div className="w-full h-full fixed block top-0 left-0 bg-white opacity-75 z-50">
      <span
        className="text-green-500 opacity-75 top-1/2 my-0 mx-auto block relative w-0 h-0"
        style={{ top: "50%" }}
      >
        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
      </span>
    </div>
  );
}

export default Bill;
