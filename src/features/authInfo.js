import { createSlice } from "@reduxjs/toolkit";
const storedAuthInfo = localStorage.getItem("authInfo");
const initialState = {
	token: storedAuthInfo?.token || "",
	access: storedAuthInfo ? JSON.parse(storedAuthInfo).access : null,
};

const authInfoSlice = createSlice({
	name: "authInfo",
	initialState,
	reducers: {
		saveAuthInfo: (state, action) => {
			state.token = action.payload.token;
			state.access = action.payload.access;
			localStorage.setItem(
				"authInfo",
				JSON.stringify({
					token: action.payload.token,
					access: action.payload.access,
				})
			);
		},
	},
});

export const { saveAuthInfo } = authInfoSlice.actions;
export default authInfoSlice;
