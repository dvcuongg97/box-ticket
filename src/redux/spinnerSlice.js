import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spinnerState: false,
};

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setSpinnerOn: (state, action) => {
      state.spinnerState = true;
    },
    setSpinnerOff: (state, action) => {
      state.spinnerState = false;
    },
  },
});

export const { setSpinnerOn, setSpinnerOff } = spinnerSlice.actions;

export default spinnerSlice.reducer;
