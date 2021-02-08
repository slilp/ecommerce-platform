import React from "react";
import { Select, Radio, InputNumber, Button } from "antd";
import ProductItem from '../productItem';

function Product() {
  const [size, setSize] = React.useState("default");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex-1 p-3">
          <div className="flex flex-col md:w-1/2  w-3/4 mx-auto">
            <div className="mx-auto p-1">
            <div>
            </div>
              <img
                className="rounded-lg"
                src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/f112bd38aab24636aa55aae700d35989_9366/eg4959.jpg"
              ></img>
            </div>
            <div className="grid grid-cols-2">
              <img
                className="p-1 rounded-lg"
                src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/604d31878b954f4291e4a91500a16988_9366/g27707.jpg"
              ></img>
              <img
                className="p-1 rounded-lg"
                src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg"
              ></img>
            </div>
            <div className="grid grid-cols-2">
              <img
                className="p-1 rounded-lg"
                src="https://assets.adidas.com/images/w_375,h_375,q_auto:sensitive/bef2b209aa534fe8b88baca9010dea07_9366/GY2649_01_standard_1.jpg.jpg"
              ></img>
              <img
                className="p-1 rounded-lg"
                src="https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/2ac60859a2104b74b9f3ab96013f3c58_9366/fv6026.jpg"
              ></img>
            </div>
          </div>
        </div>
        <div className="lg:border-l-2  border-fuchsia-600 lg:mt-16 lg:mb-16 lg:ml-0 lg:mr-10"></div>
        <div className="flex-1 p-3">
          <div className="rounded p-5 break-words">
            <p className="text-xl">
              Iphone 11 ddassddasasddsadasddsddasdasdasdad
            </p>
            <p className="text-lg bg-gray-100 p-5 md:w-1/3 text-center text-yellow-700">
              500 บาท
            </p>
            <p className="text-lg">กรุณาเลือก ขนาด</p>
            <Radio.Group value={size} onChange={handleSizeChange}>
              <Radio.Button value="large">ใหญ่</Radio.Button>
              <Radio.Button value="default">กลาง</Radio.Button>
              <Radio.Button value="small">เล็ก</Radio.Button>
            </Radio.Group>
            <p></p>
            <p className="text-lg">
              <span className="pr-1">จำนวน</span>{" "}
              <InputNumber min={1} max={100000} defaultValue={3} />{" "}
              <span className="pl-1 pr-1">ชิ้น</span>{" "}
            </p>
            <p></p>

            <p className="text-lg">รายละเอียดสินค้า</p>
            <p className="text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos autem veniam nesciunt dolores delectus exercitationem
              quas modi porro recusandae. Eligendi dicta itaque at soluta fuga
              eum aperiam doloribus placeat deserunt.
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
          <div className="rounded p-5 break-words">
            <p className="text-xl">ผู้ขาย</p>
            <p className="text-lg bg-gray-100 p-5 md:w-1/2 text-center text-yellow-700">
              <img
                src="https://www.denofgeek.com/wp-content/uploads/2019/02/mcu-1-iron-man.jpg?resize=768%2C432"
                className="h-20 w-20 rounded-full cursor-pointer hover:opacity-80"
              ></img>
              นาย สลิล พ่วงพุ่ม
            </p>

            <p className="text-lg">การติดต่อ</p>
            <div className="flex items-center  space-x-4">
              <img
                src="https://image.flaticon.com/icons/png/128/2111/2111498.png"
                className="h-10 w-10 cursor-pointer hover:opacity-80"
              ></img>
              <img
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                className="h-10 w-10 cursor-pointer hover:opacity-80"
              ></img>
              <img
                src="https://icon-library.com/images/phone-icon-circle/phone-icon-circle-12.jpg"
                className="h-10 w-10 cursor-pointer hover:opacity-80"
              ></img>
              <span className="text-lg">087-500-6783</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xl mx-2">สินค้าเเนะนำ</p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center">
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
        <ProductItem></ProductItem>
      </div>
    </div>
  );
}

export default Product;
