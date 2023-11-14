import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientProfileAPI } from "../services/Api/api";

export const layThongTinTaiKhoanAction = createAsyncThunk(
  "client/layThongTinTaiKhoanAction",
  async () => {
    const res = await clientProfileAPI.thongTinTaiKhoan();
    if (res.status === 200) {
      return res.data.content;
    }
  }
);

const initialState = {
  userProfile: {},
};

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layThongTinTaiKhoanAction.fulfilled, (state, action) => {
      state.userProfile = action.payload;
    });
  },
});

export const {} = userInfoSlice.actions;

export default userInfoSlice.reducer;
