import React, { useState, useEffect } from "react";
import ProductPicture from "./picture";
import Seller from "./seller";
import { getParam } from "../../axios";
import { InputNumber, Button } from "antd";
import AddCartBtn from "../cart/add";
import { useHistory } from "react-router-dom";

function Product(props) {
  const [productInfo, setProductInfo] = useState({
    sellerInfo: {},
    productImage: [],
  });
  const [qty, setQty] = useState(1);
  const history = useHistory();

  useEffect(async () => {
    const res = await getParam(`/product/info/${props.match.params.id}`, {});
    if (res.status == 200) {
      if (res.data.data != null) {
        setProductInfo(res.data.data);
      } else {
        history.push("/marketplace");
      }
    }
  }, []);

  const changeQty = (value) => {
    setQty(value);
  };

  return (
    <div className="container mx-auto my-5 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex-1 p-3">
          <div className="flex flex-col md:w-3/4 w-full mx-auto">
            <div className="grid grid-cols-2">
              <ProductPicture
                images={productInfo.productImage}
              ></ProductPicture>
            </div>
          </div>
        </div>
        <div className="lg:border-l-2  border-fuchsia-600 lg:mt-16 lg:mb-16 lg:ml-0 lg:mr-10"></div>
        <div className="flex-1 p-3">
          <div className="rounded p-5 break-words">
            <p className="text-4xl">{productInfo.productName}</p>
            <p className="text-lg bg-gray-100 p-5 md:w-1/3 text-center text-yellow-700">
              {productInfo.netPrice} บาท
            </p>
            <p className="text-lg">
              <span className="pr-1">จำนวน</span>{" "}
              <InputNumber
                min={1}
                max={100}
                defaultValue={1}
                onChange={changeQty}
              />
              <span className="pl-1 pr-1">ชิ้น</span>{" "}
            </p>
            <p className="text-lg">รายละเอียดสินค้า</p>
            <p className="text-base">{productInfo.productDesc}</p>
            <AddCartBtn
              id={productInfo.productId}
              name={productInfo.productName}
              qty={qty}
              img={productInfo.imagePath}
              price={productInfo.netPrice}
            ></AddCartBtn>
          </div>
          <hr></hr>
          <br></br>
          <Seller sellerInfo={productInfo.sellerInfo}></Seller>
        </div>
      </div>
    </div>
  );
}

export default Product;
