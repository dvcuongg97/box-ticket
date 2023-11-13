import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { layHeThongRapAction } from "../../../redux/heThongRapSlice";
import { useMediaQuery } from "react-responsive";
import DesktopCR from "./DesktopCR";
import MobileCR from "./MobileCR";

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

export default function CumRap() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(layHeThongRapAction());
  }, []);
  return (
    <>
      <Desktop>
        <DesktopCR />
      </Desktop>
      <Tablet>
        <DesktopCR />
      </Tablet>
      <Mobile>
        <MobileCR />
      </Mobile>
    </>
  );
}
