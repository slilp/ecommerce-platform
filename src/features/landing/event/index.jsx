import React from "react";
import Carousel , { consts } from "react-elastic-carousel";

function Event() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];

     const myArrow =({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? '👈' : '👉'
        return (
          <button onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
      };

  return (
    <div className="container mx-auto mt-6 px-5">
      <span className="text-2xl">Marketplace เเนะนำ</span>
      <span className="text-xl float-right">ดูทั้งหมด</span>
      <div className="flex flex-col lg:flex-row space-y-2  lg:space-x-2 lg:space-y-0 mt-2">
        <div className="flex-1 lg:h-96 h-68 mt-1 ">
          <div className="h-full">
            <img
              className="w-full h-full cursor-pointer hover:opacity-75"
              src="https://positioningmag.com/wp-content/uploads/2020/03/bookfair.jpg"
            ></img>
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-2  lg:h-96 h-70">
          <div className="flex flex-row flex-1 space-x-2 h-1/2">
            <div className="flex-1">
              <img
                className="w-full h-full hover:opacity-75 cursor-pointer "
                src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
              ></img>
            </div>
            <div className="flex-1">
              <img
                className="w-full h-full hover:opacity-75 cursor-pointer "
                src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
              ></img>
            </div>
          </div>
          <div className="flex flex-row flex-1 space-x-2 h-1/2">
            <div>
              <img
                className="w-full h-full hover:opacity-75 cursor-pointer "
                src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
              ></img>
            </div>
            <div>
              <img
                className="w-full h-full hover:opacity-75 cursor-pointer "
                src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
              ></img>
            </div>
          </div>
        </div>
      </div>

        <br></br>
        <br></br>
      <span className="text-2xl">Marketplace มาใหม่</span>
      <span className="text-xl float-right">ดูทั้งหมด</span>
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
        <div className="div">  <img
                className="hover:opacity-75 cursor-pointer ml-4"
                src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
              ></img></div>
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
