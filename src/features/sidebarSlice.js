import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sidebarIsOpen: true,
};

const sidebarSlice = createSlice({
	name: "sidebarOpen",
	initialState,
	reducers: {
		toogleSidebar: (state) => {
			console.log("b");
			state.sidebarIsOpen = !state.sidebarIsOpen;
			console.log("a");
		},
	},
});

export const { toogleSidebar } = sidebarSlice.actions;
export default sidebarSlice;
