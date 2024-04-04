const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  id: ""
};
const navigateButtonSlice = createSlice({
  name: "navigateButton",
  initialState,
  reducers: {
    setId: (state, { payload }) => {
      state.id = payload;
    },
  },
});

export const { setId } = navigateButtonSlice.actions;

export default navigateButtonSlice.reducer;
