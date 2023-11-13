import { Carousel } from "antd";
import React, { useRef } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Search from "./Search";

export default function Banner() {
  const bannerRef = useRef([
    "../image/Banner/bn1.jpg",
    "../image/Banner/bn2.jpg",
    "../image/Banner/bn3.jpg",
    "../image/Banner/bn4.png",
  ]);
  const renderBanner = () => {
    return bannerRef.current?.map((item, index) => {
      return (
        <div key={index} className="md:h-[760px] h-1/3 w-full object-fill">
          <img className="w-full h-full object-fill" src={item} alt={item} />
        </div>
      );
    });
  };
  return (
    <>
      <div className="h-0 md:h-[82px] bg-white"></div>
      <div className="relative">
        <Search />
        <Carousel autoplay={true}>{renderBanner()}</Carousel>
      </div>
    </>
  );
}
