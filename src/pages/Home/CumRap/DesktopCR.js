import React from "react";
import { useSelector } from "react-redux";
import { Popover, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "../../../../node_modules/moment/locale/vi.js";
import "../../../asset/Scrollbar/ScrollBar.css";
export default function DesktopCR() {
  const onChange = (key) => {};
  const { arrHeThongRap } = useSelector((state) => state.heThongRapSlice);
  const renderLichChieu = (danhSachPhim) => {
    return danhSachPhim?.map((phim) => {
      return (
        <div key={phim.maPhim}>
          <div className="flex space-x-5 p-3 border-b">
            <div>
              <div className="flex items-center pb-2">
                <img
                  className="w-20 h-20  object-center mr-2"
                  src={phim.hinhAnh}
                  alt="..."
                />
                <div>
                  <p className=" text-base font-bold">{phim.tenPhim}</p>
                  <p>{phim.dangChieu ? "Đang Chiếu" : "Sắp Chiếu"}</p>
                </div>
              </div>
              <div>
                <div>
                  {phim?.lstLichChieuTheoPhim?.slice(0, 6).map((lichChieu) => {
                    return (
                      <div key={lichChieu.maLichChieu} className="mb-3 flex">
                        <NavLink
                          style={{
                            backgroundColor: "rgb(251, 66, 38)",
                          }}
                          className="text-center text-white hover:text-green-500 py-1 px-3 mr-2 border rounded-md  font-medium capitalize"
                          to={`/booking/${lichChieu.maLichChieu}`}
                        >
                          Đặt Vé
                        </NavLink>
                        <p className="text-base text-gray-700 capitalize font-medium mb-1">
                          {moment(lichChieu.ngayChieuGioChieu)
                            .locale("vi")
                            .format("dddd, DD MMMM, YYYY")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  const renderTabCumRap = () => {
    return arrHeThongRap.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: (
          <div className="border-b pb-2">
            <img
              className="w-12 hover:scale-110"
              src={heThongRap.logo}
              alt="..."
            />
          </div>
        ),
        children: (
          <Tabs
            onChange={onChange}
            className="scrollbar"
            tabPosition="left"
            style={{
              height: "680px",
              overflow: "scroll",
              overflowX: "hidden",
            }}
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.maCumRap,
                label: (
                  <div className="flex border-b pb-2">
                    <img
                      className="w-12 h-12 mr-2"
                      src={cumRap.hinhAnh}
                      alt={cumRap.hinhAnh}
                    />

                    <div className="text-left">
                      <Popover
                        content={
                          <div>
                            <p>{cumRap.diaChi}</p>
                          </div>
                        }
                      >
                        <p className=" text-green-500 font-bold">
                          {cumRap.tenCumRap}
                        </p>

                        <p className="text-ellipsis overflow-hidden text-white">
                          {cumRap.diaChi.slice(0, 20)} ...
                        </p>
                      </Popover>
                    </div>
                  </div>
                ),
                children: <>{renderLichChieu(cumRap.danhSachPhim)}</>,
              };
            })}
          />
        ),
      };
    });
  };

  return (
    <>
      <div
        style={{
          maxWidth: "940px",
          width: "100%",
          margin: "auto",
          background: "#fff",
          border: "none",
        }}
      >
        <div
          className="hidden md:block "
          style={{
            backgroundImage: "url(./image/shadow.png)",
            backgroundSize: "100%",
            maxWidth: "768x",
            width: "100%",
            height: "120px",
            margin: "auto",
          }}
        ></div>
        <div
          id="cumRap"
          className="container mx-auto border"
          style={{
            backgroundColor: "rgba(240,240,240, 0.2s)",
          }}
        >
          <div className="container">
            <Tabs
              style={{
                height: "680px",
              }}
              tabPosition="left"
              items={renderTabCumRap()}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
