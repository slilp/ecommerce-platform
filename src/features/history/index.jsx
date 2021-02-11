import React from "react";
import HistoryTable from "./table";
import CustomerInfoCard from "../customer";

function BuyHistory() {
  return (
    <div className="container mx-auto min-h-screen p-4">
      <div className="flex md:flex-row flex-col justify-between space-y-3">
        <div className="lg:w-1/4 md:w-1/2 px-2">
          <CustomerInfoCard></CustomerInfoCard>
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
