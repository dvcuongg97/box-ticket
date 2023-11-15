import React from "react";
import DanhSachPhim from "./DanhSachPhim/DanhSachPhim";
import Banner from "./Banner/Banner";
import CumRap from "./CumRap/CumRap";
import TinTuc from "./TinTuc/TinTuc";
import UngDung from "./UngDung/UngDung";

export default function Home() {
  return (
    <>
      <Banner />
      <DanhSachPhim />
      <CumRap />
      <TinTuc />
      <UngDung />
    </>
  );
}
