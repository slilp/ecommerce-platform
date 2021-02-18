import React from "react";

function PaymentChannel(props) {

  const selectChannel = () => {
    
      let newChannelState = [];
      for(let item of props.channels){
        if(item.id == props.id){
          item.select = true;
          newChannelState.push(item);
        }else{
          item.select = false;
          newChannelState.push(item);
        }
      }

      props.setSelect(newChannelState);
  }

  return (
    <div onClick={selectChannel} className={`flex relative flex-col justify-center items-center hover:shadow-xl  cursor-pointer m-2 p-2 ${props.select ? "shadow-xl":""}`}>
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
