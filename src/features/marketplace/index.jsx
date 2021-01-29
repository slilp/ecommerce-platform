import React from "react";
import MarketPlaceItem from "./item";
import { Input } from "antd";
const { Search } = Input;

function MarketPlace() {
  const onSearch = (value) => console.log(value);

  return (
    <div>
      <div className="bg-gray-100 p-10 text-center">
        <div className="flex justify-center mb-2">
          <img
            className="w-20"
            src="https://www.flaticon.com/svg/vstatic/svg/2230/2230606.svg?token=exp=1611865293~hmac=a49eadaf9d958e42550d6b45f482a241"
          ></img>
        </div>

        <h1 className="text-2xl text-black">ค้นหา marketplace อะไรดี ?</h1>
        <Search
          placeholder="จุฬามาเก็เพลส"
          onSearch={onSearch}
          size="large"
          loading={false}
          style={{ width: 300 }}
        />
      </div>
      <div className="container mx-auto p-5  lg:w-2/3">
        <p className="text-2xl m-2 ">Marketplace เเนะนำ </p>
        <p className="text-lg m-2 ">
          คำที่ค้นหา : <span className="text-yellow-600">จุฬา</span>{" "}
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 justify-items-center">
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
          <MarketPlaceItem></MarketPlaceItem>
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
