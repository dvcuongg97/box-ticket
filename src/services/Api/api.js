import { https } from "./configApi";

export const clientAPI = {
  layDanhSachPhim: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09");
  },
  layThongTinPhim: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },

  layThongTinLichChieuPhim: (maPhim) => {
    return https.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
    );
  },

  layThongTinLichChieuHeThongRap: () => {
    return https.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP08"
    );
  },

  layDanhSachPhongVe: (maLichChieu) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  },
};
