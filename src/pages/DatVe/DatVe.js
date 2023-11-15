import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Seats from "./Seats";
import Bill from "./Bill";
import { layDanhSachPhongVeAction } from "../../redux/datVeSlice";
import { layThongTinTaiKhoanAction } from "../../redux/userInfoSlice";

export default function DatVe() {
  let dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch(layDanhSachPhongVeAction(params.maLichChieu));
    dispatch(layThongTinTaiKhoanAction());
  }, [params.maLichChieu]);

  return (
    <>
      <div className="hidden md:block h-20 w-full bg-white"></div>
      <div className="flex-col lg:grid lg:grid-cols-3 gap-4 mt-9">
        <Seats />
        <Bill />
      </div>
    </>
  );
}
