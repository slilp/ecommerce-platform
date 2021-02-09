import React from "react";
import SuggestItem from "./suggest";
import SearchProduct from "./search";


function Store() {

  const storeInfo = {
    name: "งานหนังสือเเห่งชาติ",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi minus doloremque similique harum! Eligendi veniam corporis dolore ipsam? Atque, nesciunt! Asperiores ab explicabo ratione cupiditate! Quisquam pariatur suscipit voluptatem corporis?",
    image:
      "https://thestandard.co/wp-content/uploads/2020/03/TSD-UPDATE-20202-2-3.jpg",
  };

  return (
    <div>
      <div className="container mx-auto lg:p-5  lg:w-2/3">
        <img className="lg:h-90 w-full" src={storeInfo.image}></img>

        <div className="flex justify-center lg:flex-row flex-col items-center p-5">
          <div className="p-5 lg:flex-1">
            <h1 className="text-3xl px-5 border-l-4 border-pink-500">
              {storeInfo.name}
            </h1>
            <p className="text-lg">{storeInfo.desc}</p>
          </div>
        </div>

        <SuggestItem></SuggestItem>
        <br></br>
        <SearchProduct></SearchProduct>
        <br></br>
      </div>
    </div>
  );
}

export default Store;
