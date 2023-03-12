import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slice/AppSlice'
export const store = configureStore({
	reducer: {
		app: appReducer
	},
});

