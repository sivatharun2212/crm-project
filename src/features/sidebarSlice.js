import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebarIsOpen: true,
};

const sidebarSlice = createSlice({
	name: "sidebarOpen",
	initialState,
	reducers: {
		toogleSidebar: (state) => {
			state.sidebarIsOpen = !state.sidebarIsOpen;
		},
	},
});

export const { toogleSidebar } = sidebarSlice.actions;
export default sidebarSlice;
