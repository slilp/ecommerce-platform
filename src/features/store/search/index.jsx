import React, { useEffect, useState } from "react";
import ProductItem from "../../productItem";
import { Link } from "react-router-dom";
import { getParam } from "../../../axios";
import { Input } from "antd";
const { Search } = Input;

function SearchProduct(props) {

  const [search, setSearch] = useState("");
  const [listProduct, setListProduct] = useState([]);

  useEffect(async () => {
    
    console.log(props.marketplaceId);

    const res = await getParam(`/product/search/${props.marketplaceId}/0/10`, {
      s: search,
    });

    if (res.status == 200) {
      setListProduct([...res.data.data.listData]);
    } else {
      setListProduct([]);
    }
  }, [search]);

  const onSearch = (value) => {
    setSearch(value.trim());
  };

  const searchChange = (e) => {
    if (e.target.value.trim().length == 0) {
      setSearch("");
    }
  };

  return (
    <>
      <p className="text-2xl m-2 ">สินค้าทั้งหมด</p>

      <div className="flex flex-col text-center justify-center items-center h-full">
        <div>
          <Search
            placeholder="ค้นหาสินค้า"
            onSearch={onSearch}
            onChange={searchChange}
            size="large"
            loading={false}
            style={{ width: 300 }}
          />
        </div>
      </div>

      <p className="text-lg m-2 ">
        คำที่ค้นหา : <span className="text-yellow-600">{search}</span>
      </p>
      <br></br>
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 justify-items-center">
        {listProduct.map((item) => (
            <ProductItem
              key={item.productId}
              id={item.productId}
              name={item.productName}
              image={item.imagePath}
              // desc={item.desc}
              displayPrice={item.displayPrice}
              netPrice={item.netPrice}
              promotionCode1={item.promotionCode1}
              promotionCode2={item.promotionCode2}
            ></ProductItem>
        ))}
      </div>
    </>
  );
}

export default SearchProduct;
