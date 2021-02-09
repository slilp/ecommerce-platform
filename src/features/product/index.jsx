import React from "react";
import ProductPicture from "./picture";
import Seller from "./seller";
import { Select, Radio, InputNumber, Button } from "antd";

function Product() {
  const [size, setSize] = React.useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const productInfo = {
    name: "Iphone 11 256GB",
    price: 500,
    sectionKey: "ขนาด",
    sectionValue: [
      {
        value: "large",
        display: "ใหญ่",
      },
      {
        value: "default",
        display: "กลาง",
      },
      {
        value: "small",
        display: "เล็ก",
      },
    ],
    desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.Dignissimos autem veniam nesciunt dolores delectus exercitationemuas modi porro recusandae. Eligendi dicta itaque at soluta fugaeum aperiam doloribus placeat deserunt."
  };

  return (
    <div className="container mx-auto my-5 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex-1 p-3">
          <div className="flex flex-col w-3/4 mx-auto">
            <div className="grid grid-cols-2">
              <ProductPicture></ProductPicture>
            </div>
          </div>
        </div>
        <div className="lg:border-l-2  border-fuchsia-600 lg:mt-16 lg:mb-16 lg:ml-0 lg:mr-10"></div>
        <div className="flex-1 p-3">
          <div className="rounded p-5 break-words">
            <p className="text-xl">{productInfo.name}</p>
            <p className="text-lg bg-gray-100 p-5 md:w-1/3 text-center text-yellow-700">
              {productInfo.price} บาท
            </p>
            <p className="text-lg">กรุณาเลือก {productInfo.sectionKey}</p>
            <Radio.Group value={size} onChange={handleSizeChange}>
              {productInfo.sectionValue.map((item) => (
                <Radio.Button value={item.value}>{item.display}</Radio.Button>
              ))}
            </Radio.Group>
            <p></p>
            <p className="text-lg">
              <span className="pr-1">จำนวน</span>{" "}
              <InputNumber min={1} max={100000} defaultValue={3} />{" "}
              <span className="pl-1 pr-1">ชิ้น</span>{" "}
            </p>
            <p className="text-lg">รายละเอียดสินค้า</p>
            <p className="text-base">
                {productInfo.desc}
            </p>
            <Button
              type="primary"
              shape="round"
              size={"large"}
              style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
            >
              ใส่ตะกร้า
            </Button>
          </div>
          <hr></hr>
          <br></br>
          <Seller></Seller>
        </div>
      </div>
    </div>
  );
}

export default Product;


