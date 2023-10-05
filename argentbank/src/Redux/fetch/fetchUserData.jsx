import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../reducers/userSlice";

export const fetchUserData = createAsyncThunk("fetchUserData", async (token, thunkAPI) => {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        if (!response.ok) {
            throw new Error("Recupération impossible");
        }
        const data = await response.json();
        thunkAPI.dispatch(getUserData({ data }));
        console.log({data})
        const userData = data.body;
        console.log({userData});
        return userData;
    } catch (error) {
        console.error(error)
    }
});
