import React, { useState } from "react";
import StoreItem from "./store";
import { Input } from "antd";
import shop from "../../common/icon/shop.svg";
const { Search } = Input;

function MarketPlace() {
  const [search, setSearch] = useState("");

  const onSearch = (value) => {
    setSearch(value.trim());
  };

  const stores = [
    {
      id:1,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:2,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:3,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:4,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:5,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:6,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:7,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
    {
      id:8,
      title: "เกษตรศาสตร์มาเก็ตเพลส",
      desc: "รวบรวมสินค้า",
      image:
        "https://assets.skooldio.com/courses/design-thinking-01/design-thinking-cover-2021-2.png",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 p-10 text-center">
        <img className="w-20 mx-auto mb-2" src={shop}></img>

        <h1 className="text-2xl text-black">ค้นหา marketplace อะไรดี ?</h1>
        <Search
          placeholder="จุฬามาเก็ตเพลส"
          onSearch={onSearch}
          size="large"
          loading={false}
          style={{ width: 300 }}
        />
      </div>
      <div className="container mx-auto p-5  lg:w-2/3">
        <p className="text-2xl m-2 ">Marketplace ทั้งหมด</p>
        <p className="text-lg m-2 ">
          คำที่ค้นหา : <span className="text-yellow-600">{search}</span>
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
          {stores.map((item) => (
            <StoreItem
            key={item.id}
            title={item.title}
            image={item.image}
            desc={item.desc}
            id={item.id}
            ></StoreItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
