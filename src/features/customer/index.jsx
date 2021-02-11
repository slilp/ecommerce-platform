import React from "react";

function CUstomerInfoCard() {
  const customer = {
    profile:
      "https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    title: "นาย",
    firstName: "สลิล",
    lastName: "พ่วงพุ่ม",
    tel: "tel:+0875006783",
    facebook: "https://tailwindcss.com/docs/box-shadow",
    line: "https://tailwindcss.com/docs/box-shadow",
  };

  return (
    <div class="card border relative flex flex-col shadow-lg m-5">
      <img
        class="max-h-20 w-full opacity-80 absolute"
        src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
        alt=""
      />
      <div class="profile w-full flex m-3 ml-4 text-white">
        <img
          class="w-28 h-28 mx-auto bg-white rounded-full z-40"
          src={customer.profile}
          alt=""
        />
        <div className="title mt-11 ml-3 font-bold flex flex-col">
          <div class="name break-words">Model</div>
          <div class="add font-semibold text-sm italic dark">Model</div>
        </div>
      </div>
      <div className=" text-md text-center">
        <p className="font-bold text-lg">
          {customer.title} {customer.firstName} {customer.lastName}
        </p>
        <div className="flex justify-center my-5">
          <a href={customer.line} target="_blank">
            <img
              src="https://image.flaticon.com/icons/png/128/2111/2111498.png"
              className="h-10 w-10  mx-2 cursor-pointer hover:opacity-80"
            ></img>
          </a>
          <a href={customer.facebook} target="_blank">
            <img
              src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
              className="h-10 w-10  mx-2 cursor-pointer hover:opacity-80"
            ></img>
          </a>
          <a href={customer.tel}>
            <img
              src="https://icon-library.com/images/phone-icon-circle/phone-icon-circle-12.jpg"
              className="h-10 w-10 mx-2 cursor-pointer hover:opacity-80"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CUstomerInfoCard;
