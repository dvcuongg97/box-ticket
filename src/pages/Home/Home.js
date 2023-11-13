import React from "react";
import DanhSachPhim from "./DanhSachPhim/DanhSachPhim";
import Banner from "./Banner/Banner";
import CumRap from "./CumRap/CumRap";

export default function Home() {
  return (
    <>
      <Banner />
      <DanhSachPhim />
      <CumRap />
    </>
  );
}
