import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // Réducteur pour mettre à jour les données de l'utilisateur
        getUserData: (state, action) => {
            // state : état actuel de la tranche (avec initialState)
            // Met à jour les propriétés de l'état avec les données de l'action
            state.email = action.payload.data.body.email;
            state.firstName = action.payload.data.body.firstName;
            state.lastName = action.payload.data.body.lastName;
            state.userName = action.payload.data.body.userName;
        },
        setEditUserName: (state, action) => {
            state.userName = action.payload;
        },
        resetUserData: () => {
            return initialState
        },
    },
});
export const { getUserData, setEditUserName, resetUserData } = userSlice.actions;
export default userSlice.reducer;

