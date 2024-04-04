import categoriesButtonSlice from "../features/categoriesButton/categoriesButtonSlice";
import settingsButtonSlice from "../features/settingsButton/settingsButtonSlice";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    settingsButton: settingsButtonSlice,
    categoriesButton: categoriesButtonSlice,
  },
});

export default store;
