import categoriesButtonSlice from "../features/categoriesButton/categoriesButtonSlice";
import navigateButtonSlice from "../features/navigateButton/navigateButtonSlice";
import settingsButtonSlice from "../features/settingsButton/settingsButtonSlice";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    settingsButton: settingsButtonSlice,
    categoriesButton: categoriesButtonSlice,
    navigateButton: navigateButtonSlice,
  },
});

export default store;
