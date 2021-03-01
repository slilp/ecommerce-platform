import React , { useState , useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import PaymentChannel from "./paymentChannel";
import kplus from "../../common/icon/kplus.png";
import scb from "../../common/icon/scb.jpg";
import credit from "../../common/icon/credit.png";
import coin from "../../common/icon/coin.ico";
import trueWallet from "../../common/icon/true.png";
import Bill from "../bill";

function Checkout() {

  const history = useHistory();
  const cartList = useSelector((state) => state.cart);

  const [paymentChannel,setPaymentChannel] = useState([
    {
      id:1,
      name: "K-Plus",
      icon: kplus,
      select: true
    },
    {
      id:2,
      name: "SCB",
      icon: scb,
      select: false
    },
    {
      id:3,
      name: "Credit/Debit",
      icon: credit,
      select: false
    },
    {
      id:4,
      name: "True Wallet",
      icon: trueWallet,
      select: false
    },
    {
      id:5,
      name: "Other",
      icon: coin,
      select: false
    },
  ]);

  useEffect(async () => {
    if(cartList.length == 0){
      history.push("/cart");
    }
  }, []);

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
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                select={item.select}
                channels={paymentChannel}
                setSelect={setPaymentChannel}
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
          paymentChannel={paymentChannel.find(item=>item.select).id}
          ></Bill>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
