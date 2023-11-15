import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import danhSachPhimSlice from "./redux/danhSachPhimSlice";
import videoModalSlice from "./redux/videoModalSlice";
import heThongRapSlice from "./redux/heThongRapSlice";
import detailMovieSlice from "./redux/detailMovieSlice";
import userInfoSlice from "./redux/userInfoSlice";
import datVeSlice from "./redux/datVeSlice";
export let store = configureStore({
  reducer: {
    danhSachPhimSlice,
    videoModalSlice,
    heThongRapSlice,
    detailMovieSlice,
    userInfoSlice,
    datVeSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
