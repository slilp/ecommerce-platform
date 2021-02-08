import React from "react";
import ProductItem from "../productItem";
import { Input } from "antd";
const { Search } = Input;

function Store() {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className="container mx-auto lg:p-5  lg:w-2/3">
        <img
          className="lg:h-90 w-full"
          src="https://thestandard.co/wp-content/uploads/2020/03/TSD-UPDATE-20202-2-3.jpg"
        ></img>

        <div className="flex justify-center lg:flex-row flex-col items-center">
          <div className="p-5 lg:flex-1">
            <h1 className="text-2xl">ชื่อร้าน</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              minus doloremque similique harum! Eligendi veniam corporis dolore
              ipsam? Atque, nesciunt! Asperiores ab explicabo ratione
              cupiditate! Quisquam pariatur suscipit voluptatem corporis?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              minus doloremque similique harum! Eligendi veniam corporis dolore
              ipsam? Atque, nesciunt! Asperiores ab explicabo ratione
              cupiditate! Quisquam pariatur suscipit voluptatem corporis?
            </p>
          </div>
          <div className="p-5 flex-1">
            <div className="flex items-center justify-center space-x-6">
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

        <p className="text-2xl m-2 ">สินค้าเเนะนำ</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>

        <p className="text-2xl m-2 ">สินค้าทั้งหมด</p>

        <div className="flex flex-col text-center justify-center items-center h-full">
          <div>
            <Search
              placeholder="ต้นหาสินค้า"
              onSearch={onSearch}
              size="large"
              loading={false}
              style={{ width: 300 }}
            />
          </div>
        </div>

        <p className="text-lg m-2 ">
          คำที่ค้นหา : <span className="text-yellow-600">จุฬา</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center">
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
      </div>
    </div>
  );
}

export default Store;
