import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
    },
    reducers: {
        getUserData: (state, action) => {
            // state : état actuel de la tranche (avec initialState)
            state.email = action.payload.data.body.email;
            state.firstName = action.payload.data.body.firstName;
            state.lastName = action.payload.data.body.lastName;
            state.userName = action.payload.data.body.userName;
        },
        setEditUserName: (state, action) => {
            state.userName = action.payload;
        },
    },
});
export const { getUserData, setEditUserName } = userSlice.actions;
export default userSlice.reducer;
