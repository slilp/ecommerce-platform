import React from "react";
import ProductItemCart from "./product";
import Bill from "../bill";
import { useSelector } from "react-redux";

function Cart(props) {

  const cartList = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">ตะกร้าสินค้าของคุณ</h1>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="lg:w-2/3 md:w-1/2">
          <h1 className="text-xl border-b-2 border-red-500 p-2">
            รายการของคุณ  
          </h1>
          {
            cartList.length == 0 && (
              <h1 className="text-center my-5">ยังไม่มีรายการ</h1>
            )
          }
          {cartList.map(item => (
            <ProductItemCart
            key={item.productId}
            id={item.productId}
            productName={item.productName}
            productImg={item.productImage || "https://img2.pngio.com/documentation-screenshotlayer-api-default-png-250_250.png"}
            productQty={item.quantity}
            productPrice={item.netPrice}
            ></ProductItemCart>
          ))}
        </div>
        <div className="lg:w-1/4 md:w-1/2 px-2">
          <Bill step="cart" next="/address"></Bill>
        </div>
      </div>
    </div>
  );
}

export default Cart;
