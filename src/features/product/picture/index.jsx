import React from "react";
import defaultImg from "../../../common/img/default.png";

function ProductPicture({ images }) {
  return (
    <>
      {images
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <div className="md:h-60 h-48 m-1">
            <img className="p-1 rounded-lg h-full w-full" src={item.imagePath}></img>
          </div>
        ))}
         {images
        .sort((a, b) => a.order - b.order)
        .map((item) => (
          <div className="md:h-60 h-48 m-1">
            <img className="p-1 rounded-lg h-full w-full" src={item.imagePath}></img>
          </div>
        ))}
    </>
  );
}

export default ProductPicture;
