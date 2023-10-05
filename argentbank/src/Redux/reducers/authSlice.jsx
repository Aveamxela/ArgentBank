import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: { token: null },
    reducers: {
        logIn: (state, action) => {
            state.token = action.payload.token;
        },
        logOut: (state) => {
            state.token = null;
        },
    },
});
export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
export const currentToken = (state) => state.auth.token;
