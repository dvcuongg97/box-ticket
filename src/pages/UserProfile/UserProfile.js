import React, { useEffect } from "react";
import AccountInfo from "./AccountInfo";
import TicketList from "./TicketList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { layThongTinTaiKhoanAction } from "../../redux/userInfoSlice";
import { userLocalStorage } from "../../services/LocalStorage/userLocalStorage";

export default function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = userLocalStorage.get();
  useEffect(() => {
    // kiểm tra đăng nhập
    if (!userLogin) {
      navigate("/");
    }
    dispatch(layThongTinTaiKhoanAction());
  }, [userLogin]);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(../image/bgall.jpg)",
        }}
        className="w-full h-100%"
      >
        <div className="hidden lg:block h-[82px] bg-white"></div>
        <div className="lg:grid lg:grid-cols-12 flex-col w-full h-full">
          <AccountInfo />
          <TicketList />
        </div>
      </div>
    </>
  );
}
