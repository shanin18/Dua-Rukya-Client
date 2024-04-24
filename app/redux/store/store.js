import baseApi from "../api/baseApi";
import categoriesButtonSlice from "../features/categoriesButton/categoriesButtonSlice";
import settingsButtonSlice from "../features/settingsButton/settingsButtonSlice";


const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    settingsButton: settingsButtonSlice,
    categoriesButton: categoriesButtonSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
