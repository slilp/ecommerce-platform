import React, { useState , useEffect } from "react";
import StoreItem from "./store";
import { Input } from "antd";
import shop from "../../common/icon/shop.svg";
import {getParam} from "../../axios";
const { Search } = Input;

function MarketPlace() {

  const [search, setSearch] = useState("");
  const [market,setMarket] = useState([]);
  const [totalRecord,setTotalRecord] = useState(0);


  useEffect(async () => {

    const res = await getParam("/marketplace/search/0/10", {
      name : search
    });

    if (res.status == 200) {
      setMarket([...res.data.data.listData]);
    }else{
      setMarket([]);
    }

  }, [search])


  const onSearch = (value) => {
    setSearch(value.trim());
  };

  const searchChange = (e) =>{
      if(e.target.value.trim().length == 0){
        setSearch("");
      }
  }

  return (
    <div className="min-h-screen">
      <div className="bg-gray-100 p-10 text-center">
        <img className="w-20 mx-auto mb-2" src={shop}></img>

        <h1 className="text-2xl text-black">ค้นหา marketplace อะไรดี ?</h1>
        <Search
          placeholder="จุฬามาเก็ตเพลส"
          onSearch={onSearch}
          onChange={searchChange}
          size="large"
          loading={false}
          style={{ width: 300 }}
        />
      </div>
      <div className="container mx-auto p-5">
        <p className="text-2xl m-2 ">Marketplace ทั้งหมด</p>
        <p className="text-lg m-2 ">
          คำที่ค้นหา : <span className="text-yellow-600">{search}</span>
        </p>
        <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
          {market.map((item) => (
            <StoreItem
            key={item.marketplaceId}
            title={item.marketName}
            image={item.profileImagePath}
            desc={item.preDescription}
            id={item.marketplaceId}
            ></StoreItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
