import React, { useState, useEffect } from "react";
import {getParamAuth} from "../../axios";

function CustomerInfoCard() {
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    const res = await getParamAuth("/customer/info", {});
    if (res.status == 200) {
      if (res.data.data != null) {
        setProfile(res.data.data);
      } 
    }
  }, []);

  return (
    <div class="card border relative flex flex-col shadow-lg m-5">
      <img
        class="max-h-20 w-full opacity-80 absolute"
        src="https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg"

      />
      <div class="profile w-full flex m-3 ml-4 text-white">
        <img
          class="w-28 h-28 mx-auto bg-white rounded-full z-40"
          src={profile.profileImagePath}
          alt=""
        />
        <div className="title mt-11 ml-3 font-bold flex flex-col">
          <div class="name break-words">Model</div>
          <div class="add font-semibold text-sm italic dark">Model</div>
        </div>
      </div>
      <div className=" text-md text-center">
        <p className="font-bold text-lg">
          {profile.title} {profile.firstName} {profile.lastName}
        </p>
        <div className="flex justify-center my-5">
          <a href={profile.line} target="_blank">
            <img
              src="https://image.flaticon.com/icons/png/128/2111/2111498.png"
              className="h-10 w-10  mx-2 cursor-pointer hover:opacity-80"
            ></img>
          </a>
          <a href={profile.facebook} target="_blank">
            <img
              src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
              className="h-10 w-10  mx-2 cursor-pointer hover:opacity-80"
            ></img>
          </a>
          <a href={profile.mobile}>
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

export default CustomerInfoCard;
