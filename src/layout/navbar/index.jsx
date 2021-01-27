import React from "react";
import styled from "styled-components";

function NavBar(props) {
  return (
    <div className="bg-gray-800 p-3">
      <div className="container mx-auto pl-3 pr-3">
        <div className="hidden  lg:flex flex-wrap justify-between items-center">
          <div className="flex space-x-5 align-middle">
            <a className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
          </div>
          <div></div>
          <div className="flex space-x-4">
            <a className="text-grey-300 px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
            <a className="text-grey-300 px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center mb-3 lg:hidden">
            <a className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
        </div>
        <div className="flex  flex-wrap justify-between items-center lg:hidden">
          <div className="flex space-x-5 align-middle">
            <a className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
          </div>
          <div></div>
          <div className="flex space-x-4">
            <a className="text-grey-300 px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
            <a className="text-grey-300 px-3 py-2 rounded-md text-sm font-medium">
              หน้าเเรก
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
