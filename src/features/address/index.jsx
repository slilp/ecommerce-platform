import React, { useEffect, useState } from "react";
import AddAddress from "./add";
import Bill from "../bill";
import { getParamAuth } from "../../axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Address() {
  const [addressInfo, setAddressInfo] = useState({address:{}});
  const [openBtn, setOpenBtn] = useState(false);
  const history = useHistory();

  const cartList = useSelector((state) => state.cart);

  useEffect(async () => {

    if(cartList.length == 0){
      history.push("/cart");
    }

    const res = await getParamAuth("/address/info", {});
    if (res.status === 200) {
      setAddressInfo(res.data.data);
    }
  }, []);

  const openAddForm = () => {
    setOpenBtn(!openBtn);
  };

  return (
    <div className="container mx-auto md:p-10 p-4 min-h-screen">
      <h1 className="text-2xl">ที่อยู่จัดส่งของคุณ</h1>
      <br></br>
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="md:w-1/2">
          <h1 className="text-xl">
            <i className="fas fa-map-marker-alt px-2"></i>ที่อยู่จัดส่ง
          </h1>
          {addressInfo != null && (
            <div className="bg-gray-100 p-5">
              {/* <p className="font-bold">{addressInfo.address.}</p> */}
              <p>นาย สลิล พ่วงพุ่ม</p>
              <p>
                {addressInfo.addressInfo} เเขวง {addressInfo.address.subDistrict} เขต {addressInfo.address.district} {addressInfo.address.province} {addressInfo.address.zipCode}
              </p>
            </div>
          )}
          <br></br>
          <hr></hr>
          <br></br>
          {(addressInfo == null) && (
            <div className="text-center text-lg cursor-pointer">
              <span onClick={openAddForm}>
                {!openBtn && (<i class="fas fa-plus-square text-2xl px-2"></i>)}
                {openBtn && (<i class="fas fa-minus-square text-2xl px-2"></i>)}

                เพิ่มที่อยู่จัดส่ง
              </span>
            </div>
          )}
          <br></br>
          {openBtn && (
            <div>
              <AddAddress></AddAddress>
            </div>
          )}
        </div>
        <div className="lg:w-1/3 md:w-1/2 px-2">
          <Bill step="address" next="/checkout"></Bill>
        </div>
      </div>
    </div>
  );
}

export default Address;
