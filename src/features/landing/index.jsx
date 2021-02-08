import React from "react";
import Header from "./header";
import Event from "./event";
import Footer from "./footer";
import questionIcon from "../../common/icon/question.svg";
import moneyIcon from "../../common/icon/money.svg";
import trustIcon from "../../common/icon/trust.svg";
import productIcon from "../../common/icon/product.svg";

function Landing(props) {
  const subSectionContent = [
    {
      title: "การจัดสินค้า",
      content:"สินค้าเเยกตาม marketplace ไม่ใช่ตามประเภทของสินค้า เสมือนคุณได้เข้าไปดูสินค้าใน marketplace จริงๆ",
      icon:productIcon
    },
    {
      title: "ความน่าเชื่อถือ",
      content:"ซื้อของเหมือนอยู่ใน marketplace เเต่ได้ประกันสินค้าเสมือนคุณซื้อผ่านร้าน e-commerce ที่เป็นทางการ",
      icon:trustIcon
    },
    {
      title: "คนซื้อ = คนขาย",
      content:"คุณไม่เพียงสามารถซื้อสินค้า เเต่ยังสามารถเป็นผู้ขายสินค้าเองได้ด้วย เป็นช่องทางสร้างรายได้ให้กับคุณ",
      icon:moneyIcon
    },
  ];

  return (
    <div className="m-0 p-0">
      <Header></Header>
      <div className="bg-gray-50 mt-10">
        <div className="flex flex-col lg:flex-row container mx-auto p-5 lg:p-10">
          <div className="flex-1 text-center lg:border-r-2  border-gray-400 p-5 pb-10">
            <img src={questionIcon} className="w-1/6 mx-auto mb-4"></img>
            <h1 className="lg:text-3xl text-2xl text-indigo-400">
              เราคือใคร ?
            </h1>
            <p className="text-lg m-0">
              เราสร้างประสบการณ์ใหม่ในการซื้อสินค้า โดยนำ marketplace
              มารวมกับบริการ e-commerce ด้วยเเนวคิดใหม่เพื่อให้ท่านสามารถเข้าถึง
              marketplace ได้ง่ายเเละสะดวกกว่าที่เคยเป็นมา
            </p>
          </div>
          <div className="flex justify-center flex-1  border-t-2 lg:border-none border-gray-400  p-5 pt-10 pb-10">
            <div className="lg:w-2/3">
              {subSectionContent.map((content) => (
                <SubSection
                title={content.title}
                content={content.content}
                icon={content.icon}
                ></SubSection>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
}

function SubSection(props) {
  return (
    <div className="flex flex-row justify-center items-center space-x-8 mb-3">
      <img src={props.icon} className="w-16"></img>
      <div>
        <h1 className="text-xl text-indigo-400 mb-0">{props.title}</h1>
        <span>{props.content}</span>
      </div>
    </div>
  );
}

export default Landing;
