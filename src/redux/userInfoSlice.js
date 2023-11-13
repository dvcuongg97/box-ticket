import { createSlice } from "@reduxjs/toolkit";
import { userLocalStorage } from "../services/LocalStorage/userLocalStorage";

const initialState = {
  userLogin: userLocalStorage.get(),
};

const userInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState,
  reducers: {},
});

export const {} = userInfoSlice.actions;

export default userInfoSlice.reducer;
