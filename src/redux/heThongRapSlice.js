import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clientAPI } from "../services/Api/api";

export const layHeThongRapAction = createAsyncThunk(
  "layHeThongRapAction",
  async () => {
    const res = await clientAPI.layThongTinLichChieuHeThongRap();
    if (res.status === 200) {
      return res.data.content;
    }
  }
);

const initialState = {
  arrHeThongRap: [],
};

const heThongRapSlice = createSlice({
  name: second,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layHeThongRapAction.fulfilled, (state, action) => {
      state.arrHeThongRap = action.payload;
    });
  },
});

export const {} = heThongRapSlice.actions;

export default heThongRapSlice.reducer;
