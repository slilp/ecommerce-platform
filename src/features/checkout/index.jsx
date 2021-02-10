import React from "react";
import PaymentChannel from "./paymentChannel";
import kplus from "../../common/icon/kplus.png";
import scb from "../../common/icon/scb.jpg";
import credit from "../../common/icon/credit.png";
import coin from "../../common/icon/coin.ico";
import trueWallet from "../../common/icon/true.png";
import Bill from "../bill";

function Checkout() {
  const paymentChannel = [
    {
      name: "K-Plus",
      icon: kplus,
    },
    {
      name: "SCB",
      icon: scb,
    },
    {
      name: "Credit/Debit",
      icon: credit,
    },
    {
      name: "True Wallet",
      icon: trueWallet,
    },
    {
      name: "(300.00)",
      icon: coin,
    },
  ];

  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">กรุณาเลือกช่องทางการชำระเงิน</h1>
      <br></br>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="md:w-1/2">
          <h1 className="text-xl">
            <i className="fas fa-money-bill-wave px-2"></i>ช่องทางการชำระเงิน
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2">
            {paymentChannel.map((item) => (
              <PaymentChannel
                name={item.name}
                icon={item.icon}
              ></PaymentChannel>
            ))}
          </div>
          <br></br>
          <hr></hr>
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-2">
          <Bill 
          step="checkout"
          next="/history"
          ></Bill>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
