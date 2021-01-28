import React from "react";
import Header from "./header";
import Event from "./event";
import Footer from "./footer";


function Landing(props) {
  return (
    <div className="m-0 p-0">
      <Header></Header>
      <div className="bg-gray-50 mt-10">
        <div className="flex flex-col lg:flex-row container mx-auto p-5 lg:p-10">
          <div className="flex-1 text-center lg:border-r-2  border-gray-400 p-5 pb-10">
            <img
              src={
                "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
              }
              className="w-1/6 mx-auto mb-4"
            ></img>
            <h1 className="lg:text-3xl text-2xl text-indigo-400">
              เราคือใคร ?
            </h1>
            <p className="text-lg m-0">
              เราเป็นเเหล่งรวม marketplace
              มาให้ท่านได้เลือกสรรอย่างที่ท่านต้องการ
            </p>
            <p className="text-lg m-0">
              Passion for drive สำหรับชุมชนที่ต้องการเช้าร่วยกับเรา
              สมัครมาได้เลย
            </p>
          </div>
          <div className="flex justify-center flex-1  border-t-2 lg:border-none border-gray-400  p-5 pt-10 pb-10">
            <div className="lg:w-2/3">
              <div className="flex flex-row justify-center items-center space-x-8 mb-3">
                <img
                  src={
                    "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
                  }
                  className="w-16"
                ></img>
                <div>
                  <h1 className="text-xl text-indigo-400 mb-0">เราคือใคร ?</h1>
                  <span>
                    มาเข้าร่วมกับเราได้เเล้ววันนี้ มาเลย
                    มาเข้าร่วมกับเราได้เเล้ววันนี้
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-8 mb-3">
                <img
                  src={
                    "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
                  }
                  className="w-16"
                ></img>
                <div>
                  <h1 className="text-xl text-indigo-400 mb-0">เราคือใคร ?</h1>
                  <span>
                    มาเข้าร่วมกับเราได้เเล้ววันนี้ มาเลย
                    มาเข้าร่วมกับเราได้เเล้ววันนี้
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center space-x-8">
                <img
                  src={
                    "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
                  }
                  className="w-16"
                ></img>
                <div>
                  <h1 className="text-xl text-indigo-400 mb-0">เราคือใคร ?</h1>
                  <span>
                    มาเข้าร่วมกับเราได้เเล้ววันนี้ มาเลย
                    มาเข้าร่วมกับเราได้เเล้ววันนี้
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
}

export default Landing;
