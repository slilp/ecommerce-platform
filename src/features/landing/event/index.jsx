import React from "react";
import { Link } from "react-router-dom";
import Carousel, { consts } from "react-elastic-carousel";

function Event() {
  const suggestContent = [
    {
      image:
        "https://positioningmag.com/wp-content/uploads/2020/03/bookfair.jpg",
      order: 1,
      url: "/store",
    },
    {
      image: "https://mpics.mgronline.com/pics/Images/563000006967601.JPEG",
      order: 0,
      url: "/store",
    },
    {
      image: "https://mpics.mgronline.com/pics/Images/563000006967601.JPEG",
      order: 0,
      url: "/store",
    },
    {
      image: "https://mpics.mgronline.com/pics/Images/563000006967601.JPEG",
      order: 0,
      url: "/store",
    },
    {
      image: "https://mpics.mgronline.com/pics/Images/563000006967601.JPEG",
      order: 0,
      url: "/store",
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? "👈" : "👉";
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  };

  return (
    <div className="container mx-auto mt-6 px-5">
      <span className="text-2xl">Marketplace เเนะนำ</span>
      <Link
        to="/marketplace"
        className="text-xl float-right cursor-pointer text-indigo-900 hover:text-indigo-400"
      >
        ดูทั้งหมด
      </Link>
      <div className="flex flex-col lg:flex-row space-y-2  lg:space-x-2 lg:space-y-0 mt-2">
        <div className="flex-1 lg:h-96 h-68">
          <div className="h-full">
            {suggestContent
              .filter((o) => o.order == 1)
              .map((item) => (
                <Link to={item.url}>
                  <img
                    className="w-full h-96 cursor-pointer hover:opacity-75"
                    src={item.image}
                  ></img>
                </Link>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 lg:h-96 h-70 mt-1">
          {suggestContent
            .filter((o) => o.order != 1)
            .map((item) => (
              <Link to={item.url}>
                <div className="h-48">
                  <img
                    className="h-full w-full px-1 py-1 hover:opacity-75 cursor-pointer "
                    src={item.image}
                  ></img>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <span className="text-2xl">Marketplace มาใหม่</span>
      <Link
        to="/marketplace"
        className="text-xl float-right cursor-pointer text-indigo-900 hover:text-indigo-400"
      >
        ดูทั้งหมด
      </Link>
      <br></br> <br></br>
      <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          {" "}
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
      </Carousel>
    </div>
  );
}

export default Event;
