import React from "react";

function ProductPicture() {
  const productInfo = {
    images: [
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
      {
        image:
          "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/0572968b5d294a54a8fcac120187e182_9366/fx5521.jpg",
        order: 0,
      },
    ],
  };

  return (
    <>
      {productInfo.images.map((item) => (
        <img className="p-1 rounded-lg" src={item.image}></img>
      ))}
    </>
  );
}

export default ProductPicture;
