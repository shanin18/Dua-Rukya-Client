const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isCategoriesOpen: true,
};
const categoriesButtonSlice = createSlice({
  name: "settingsButton",
  initialState,
  reducers: {
    setIsCategoriesOpen: (state, { payload }) => {
      state.isCategoriesOpen = payload;
    },
  },
});

export const { setIsCategoriesOpen } = categoriesButtonSlice.actions;

export default categoriesButtonSlice.reducer;
