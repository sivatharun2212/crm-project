import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../features/sidebarSlice";
import authInfoSlice from "../features/authInfo";
export const store = configureStore({
	reducer: {
		sidebarOpen: sidebarSlice.reducer,
		authInfo: authInfoSlice.reducer,
	},
});
