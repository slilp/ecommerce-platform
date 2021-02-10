import React from "react";

function PaymentChannel(props) {
  return (
    <div className="flex relative flex-col justify-center items-center hover:shadow-xl cursor-pointer m-2 p-2">
      <br></br>
      <img
        className="w-1/3"
        src={props.icon}
      ></img>
      <p className="m-2 text-lg">{props.name}</p>
    </div>
  );
}

export default PaymentChannel;
