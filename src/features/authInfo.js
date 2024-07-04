import { createSlice } from "@reduxjs/toolkit";
const storedAuthInfo = localStorage.getItem("authInfo");
const initialState = {
	token: storedAuthInfo.token || "",
	access: JSON.parse(storedAuthInfo.access) || null,
};

const authInfoSlice = createSlice({
	name: "authInfo",
	initialState,
	reducers: {
		saveAuthInfo: (state, action) => {
			state.token = action.payload.token;
			state.access = action.payload.access;
			localStorage.setItem("authInfo", {
				token: action.payload.token,
				access: JSON.stringify(action.payload.access),
			});
		},
	},
});

export const { saveAuthInfo } = authInfoSlice.actions;
export default authInfoSlice;
