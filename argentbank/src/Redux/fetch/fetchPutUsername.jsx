import { createAsyncThunk } from "@reduxjs/toolkit";
import { setEditUserName } from "../reducers/userSlice";

export const fetchPutUsername = createAsyncThunk(
    "fetchUserData",
    async ({token, newUserName}, thunkAPI) => {
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/profile",
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userName: newUserName}),
                }
            );
            if (!response.ok) {
                throw new Error("Recupération impossible");
            }
            const data = await response.json();
            console.log({ data });
            const userNameData = data.body.userName;
            thunkAPI.dispatch(setEditUserName(userNameData));
            console.log({ userNameData });
            return userNameData;
        } catch (error) {
            console.error(error);
        }
    }
);
