import React , {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { getParam } from "../../../axios";

function Event() {
  
  const [mainContent,setMainContent] = useState({});
  const [suggestContent,setSuggestContent] =  useState([{}]);

  useEffect(async () => {

    const resSubmain = await getParam(`/advertisement/search/sub_main`, {});
    if (resSubmain.status == 200) {
      if (resSubmain.data.data != null) {
        setSuggestContent(resSubmain.data.data.listData);
      } 
    }

    const resMain = await getParam(`/advertisement/search/main`, {});
    if (resMain.status == 200) {
      if (resMain.data.data != null) {
        setMainContent(resMain.data.data.listData[0]);
      } 
    }

  }, []);


  return (
    <div className="container mx-auto mt-6 px-5">
      <span className="text-2xl">Marketplace เเนะนำ</span>
      <Link
        to="/marketplace"
        className="text-xl float-right cursor-pointer text-indigo-900 hover:text-indigo-400"
      >
        ดูทั้งหมด
      </Link>
      <div className="flex flex-col lg:flex-row space-y-2  lg:space-x-2 lg:space-y-0 mt-2">
        <div className="flex-1 lg:h-96 h-68">
          <div className="h-full">
                <Link to={mainContent.clickUrl}>
                  <img
                    className="w-full h-full  cursor-pointer hover:opacity-75"
                    src={mainContent.imageUrl}
                  ></img>
                </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 flex-1 lg:h-96 h-70 mt-1">
          {suggestContent
            .map((item) => (
              <Link to={item.clickUrl}>
                <div className="h-48">
                  <img
                    className="h-full w-full px-1 py-1 hover:opacity-75 cursor-pointer "
                    src={item.imageUrl}
                  ></img>
                </div>
              </Link>
            ))}
        </div>
      </div>
      <br></br>
      {/* <br></br>
      <span className="text-2xl">Marketplace มาใหม่</span>
      <Link
        to="/marketplace"
        className="text-xl float-right cursor-pointer text-indigo-900 hover:text-indigo-400"
      >
        ดูทั้งหมด
      </Link>
      <br></br> <br></br>
      <Carousel breakPoints={breakPoints} renderArrow={myArrow}>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          {" "}
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
        <div className="div">
          <img
            className="hover:opacity-75 cursor-pointer ml-4"
            src="https://mpics.mgronline.com/pics/Images/563000006967601.JPEG"
          ></img>
        </div>
      </Carousel> */}
    </div>
  );
}

export default Event;
