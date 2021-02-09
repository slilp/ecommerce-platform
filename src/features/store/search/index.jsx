import React, { useState } from "react";
import ProductItem from "../../productItem";
import { Link } from "react-router-dom";
import { Input } from "antd";
const { Search } = Input;

function SearchProduct() {
  const [search, setSearch] = useState("");

  const onSearch = (value) => {
    setSearch(value.trim());
  };

  const items = [
    {
      name: "Iphone",
      image:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur",
      price: 500.0,
    },
    {
      name: "Iphone",
      image:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur",
      price: 500.0,
    },
    {
      name: "Iphone",
      image:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur",
      price: 500.0,
    },
    {
      name: "Iphone",
      image:
        "https://public-assets.skooldio.com/course-images%2F10391b9d-d19e-4107-ad82-cc686af37f7e%2FData%2520Storytelling%2520with%2520Infographics.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur",
      price: 500.0,
    },
  ];

  return (
    <>
      <p className="text-2xl m-2 ">สินค้าทั้งหมด</p>

      <div className="flex flex-col text-center justify-center items-center h-full">
        <div>
          <Search
            placeholder="ค้นหาสินค้า"
            onSearch={onSearch}
            size="large"
            loading={false}
            style={{ width: 300 }}
          />
        </div>
      </div>

      <p className="text-lg m-2 ">
        คำที่ค้นหา : <span className="text-yellow-600">{search}</span>
      </p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
        {items.map((item) => (
          <Link to="/p">
            <ProductItem
              name={item.name}
              image={item.image}
              desc={item.desc}
              price={item.price}
            ></ProductItem>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchProduct;
