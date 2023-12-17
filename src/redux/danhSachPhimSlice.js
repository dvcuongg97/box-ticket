import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientAPI } from "../services/Api/api";

export const layDanhSachPhimAction = createAsyncThunk(
  "layDanhSachPhimAction",
  async () => {
    const res = await clientAPI.layDanhSachPhim();
    if (res.status === 200) {
      return res.data.content;
    }
  }
);

const initialState = {
  danhSachPhim: [],
};

const danhSachPhimSlice = createSlice({
  name: "danhSachPhimSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layDanhSachPhimAction.fulfilled, (state, action) => {
      state.danhSachPhim = action.payload;
    });
  },
});

// export const {} = danhSachPhimSlice.actions;

export default danhSachPhimSlice.reducer;
