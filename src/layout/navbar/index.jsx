import React from "react";

function NavBar(props) {
  return (
    <>
      <div className="lg:fixed bg-white pt-4 lg:p-4 lg:shadow w-full">
        <div className="container mx-auto pl-3 pr-3 ">
          <div className="hidden  lg:flex flex-wrap justify-between items-center ">
            <div className="flex space-x-5 align-middle">
              <img
                src={
                  "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
                }
                className="w-24"
              ></img>
              <div className="flex space-x-5 align-middle">
                <a className="text-indigo-900 px-3 py-2 text-lg  hover:text-indigo-400">
                  หน้าเเรก
                </a>
              </div>
            </div>
            <div></div>
            <div className="flex space-x-7">
              <img
                src={
                  "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
                }
                className="w-8 cursor-pointer"
              ></img>
              <button className="text-white text-lg bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
                <i className="fas fa-users mr-2"></i>
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center mb-3 lg:hidden">
            <img
              src={
                "https://www.tact.in.th/wp-content/uploads/2019/07/Tact_logo_2019-13-04-1.png"
              }
              className="w-24"
            ></img>
          </div>
        </div>
      </div>
      <NavBarMobile></NavBarMobile>
    </>
  );
}

function NavBarMobile() {
  return (
    <div className="sticky top-0 bg-white p-3 shadow w-full lg:hidden">
      <div className="container mx-auto pl-3 pr-3 ">
        <div className="flex  flex-wrap justify-between items-center ">
          <div className="flex space-x-5 align-middle">
            <a className="text-blue-900 px-3 py-2 text-base">หน้าเเรก</a>
          </div>
          <div></div>
          <div className="flex space-x-4">
            <img
              src={
                "https://www.flaticon.com/svg/vstatic/svg/1170/1170678.svg?token=exp=1611812017~hmac=f49a40415eb14008659028758aae7011"
              }
              className="w-6 cursor-pointer"
            ></img>
            <button className="text-white text-base bg-pink-500 hover:bg-blue-600 shadow-md focus:outline-none p-2 rounded">
              <i className="fas fa-users mr-2"></i>
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

{
  /* <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      <a href="#">
        <svg width="32" height="36" viewBox="0 0 32 36" xmlns="http://www.w3.org/2000/svg"><path d="M15.922 35.798c-.946 0-1.852-.228-2.549-.638l-10.825-6.379c-1.428-.843-2.549-2.82-2.549-4.501v-12.762c0-1.681 1.12-3.663 2.549-4.501l10.825-6.379c.696-.41 1.602-.638 2.549-.638.946 0 1.852.228 2.549.638l10.825 6.379c1.428.843 2.549 2.82 2.549 4.501v12.762c0 1.681-1.12 3.663-2.549 4.501l-10.825 6.379c-.696.41-1.602.638-2.549.638zm0-33.474c-.545 0-1.058.118-1.406.323l-10.825 6.383c-.737.433-1.406 1.617-1.406 2.488v12.762c0 .866.67 2.05 1.406 2.488l10.825 6.379c.348.205.862.323 1.406.323.545 0 1.058-.118 1.406-.323l10.825-6.383c.737-.433 1.406-1.617 1.406-2.488v-12.757c0-.866-.67-2.05-1.406-2.488l-10.825-6.379c-.348-.21-.862-.328-1.406-.328zM26.024 13.104l-7.205 13.258-3.053-5.777-3.071 5.777-7.187-13.258h4.343l2.803 5.189 3.107-5.832 3.089 5.832 2.821-5.189h4.352z"></path></svg>
    </a>
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Features</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Pricing</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400" href="#">Documentation</a></li>
        <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="#">Support</a></li>
      </ul>
    </nav>
    <a href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
      <img class="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://pbs.twimg.com/profile_images/1128143121475342337/e8tkhRaz_normal.jpg" alt="Andy Leverenz"></img>

    </a>

  </div>

  </header> */
}
