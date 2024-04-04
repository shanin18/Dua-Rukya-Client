const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isOpen: true,
};
const settingsButtonSlice = createSlice({
  name: "settingsButton",
  initialState,
  reducers: {
    setIsOpen: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});

export const { setIsOpen } = settingsButtonSlice.actions;

export default settingsButtonSlice.reducer;
