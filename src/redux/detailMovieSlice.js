import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientAPI } from "../services/Api/api";

export const layThongTinPhimAction = createAsyncThunk(
  "layThongTinPhim",
  async (maPhim) => {
    const res = await clientAPI.layThongTinPhim(maPhim);
    if (res.status === 200) {
      return res.data.content;
    }
  }
);

export const layThongTinLichChieuPhimAction = createAsyncThunk(
  "layThongTinLichChieuPhimAction",
  async (maPhim) => {
    const res = await clientAPI.layThongTinLichChieuPhim(maPhim);
    if (res.status === 200) {
      return res.data.content;
    }
  }
);

const initialState = {
  detailMovie: {},
  dataLichChieu: {},
};

const detailMovieSlice = createSlice({
  name: "detailMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layThongTinPhimAction.fulfilled, (state, action) => {
      state.detailMovie = action.payload;
    });
    builder.addCase(
      layThongTinLichChieuPhimAction.fulfilled,
      (state, action) => {
        state.dataLichChieu = action.payload;
      }
    );
  },
});

export const {} = detailMovieSlice.actions;

export default detailMovieSlice.reducer;
