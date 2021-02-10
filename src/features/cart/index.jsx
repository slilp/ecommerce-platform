import React from "react";
import ProductItemCart from "./product";
import Bill from "../bill";
import Item from "antd/lib/list/Item";

function Cart() {
  const cartList = [
    {
      id: 1,
      productName: "i-phone",
      productImg:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      productQty: 20,
      productPrice:500.00
    },
    {
      id: 2,
      productName: "i-phone",
      productImg:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      productQty: 20,
      productPrice:500.00
    },
    {
      id: 3,
      productName: "i-phone",
      productImg:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      productQty: 20,
      productPrice:500.00
    },
  ];

  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">ตะกร้าสินค้าของคุณ</h1>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="lg:w-2/3 md:w-1/2">
          <h1 className="text-xl border-b-2 border-red-500 p-2">
            รายการของคุณ
          </h1>
          {cartList.map(item => (
            <ProductItemCart
            key={item.id}
            id={item.id}
            productName={item.productName}
            productImg={item.productImg}
            productQty={item.productQty}
            productPrice={item.productPrice}
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
