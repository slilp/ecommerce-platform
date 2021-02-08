import React from "react";

function Footer(props) {
  return (
    <div className="bg-gray-800 p-5 text-xl text-center">
      <h1 className="text-white">การติดต่อ</h1>
      <div className="container mx-auto flex items-center justify-center lg:flex-row flex-col space-y-2 lg:space-x-6">
        <a className="text-white hover:text-gray-300" href="tel:+0875006783">
          <i className="fa fa-phone-alt px-2 py-2"></i>087-500-6783
        </a>
        <a className="text-white hover:text-gray-300" href="https://www.w3schools.com" target="_blank">
          <i className="fab fa-facebook px-2 py-2"></i>MyEcom
        </a>
        <a className="text-white hover:text-gray-300" href="https://www.w3schools.com" target="_blank">
          <i className="fab fa-line px-2 py-2"></i>MyEcom
        </a>
      </div>
      <br></br>
      <p className="text-sm text-white">
        @2021 blink ecommerce All right reserved
      </p>
    </div>
  );
}

export default Footer;
