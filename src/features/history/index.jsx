import React from "react";
import HistoryTable from "./table";

function BuyHistory() {
  return (
    <div className="container mx-auto min-h-screen p-4">
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="lg:w-1/4 md:w-1/2 px-2">
          <div class="card border relative flex flex-col shadow-lg m-5">
            <img
              class="max-h-20 w-full opacity-80 absolute"
              src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
              alt=""
            />
            <div class="profile w-full flex m-3 ml-4 text-white">
              <img
                class="w-28 h-28 mx-auto bg-white rounded-full z-40"
                src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
                alt=""
              />
              <div class="title mt-11 ml-3 font-bold flex flex-col">
                <div class="name break-words">Sarah</div>
                <div class="add font-semibold text-sm italic dark">Model</div>
              </div>
            </div>
            <div className="mx-auto text-md">
              <p className="font-bold text-lg">นาย สลิล พ่วงพุ่ม</p>
              <p>
                <i className="fas fa-phone-volume mx-2 text-xl"></i>{" "}
                087-500-6783
              </p>
              <p>
                <i className="fab fa-facebook-square mx-2 text-xl"></i> slil
                puangpoom
              </p>
              <p>
                <i className="fab fa-line mx-2 text-xl"></i> blinkkt
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 md:w-1/2">
          <h1 className="text-xl border-b-2 border-red-500 p-2">
            รายการสั่งซื้อของคุณ
          </h1>
            <HistoryTable></HistoryTable>
        </div>
      </div>
    </div>
  );
}

export default BuyHistory;
