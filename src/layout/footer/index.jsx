import React from "react";

function Footer(props) {
  return (
    <div className="bg-gray-800 p-5  text-center">
      <h1 className="text-xl text-white">การติดต่อ</h1>
      <div className="container mx-auto flex items-center justify-center lg:flex-row flex-col space-y-2 lg:space-x-6">
        <i className="fab fa-facebook text-3xl text-white"></i>
        <span className="text-lg text-white">0875006783</span>
        <i className="fab fa-facebook text-3xl text-white"></i>
        <span className="text-lg text-white">0875006783</span>
        <i className="fab fa-facebook text-3xl text-white"></i>
        <span className="text-lg text-white">0875006783</span>
      </div>
      <br></br>
      <p className="text-sm text-white">
        @2021 blink ecommerce All right reserved
      </p>
    </div>
  );
}

export default Footer;
