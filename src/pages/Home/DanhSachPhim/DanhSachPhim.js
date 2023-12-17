import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { layDanhSachPhimAction } from "../../../redux/danhSachPhimSlice";
import DesktopDSP from "./DesktopDSP";
import MobileDSP from "./MobileDSP";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
export default function DanhSachPhim() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, [dispatch]);
  return (
    <>
      <Desktop>
        <DesktopDSP />
      </Desktop>
      <Tablet>
        <DesktopDSP />
      </Tablet>
      <Mobile>
        <MobileDSP />
      </Mobile>
    </>
  );
}
