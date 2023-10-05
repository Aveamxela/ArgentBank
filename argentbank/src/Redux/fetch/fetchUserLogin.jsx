import {createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserLogin = createAsyncThunk(
    "fetchUserLogin",
    async (userCredentials, { rejectWithValue }) => {
        try {
            const response = await fetch(
                "http://localhost:3001/api/v1/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userCredentials),
                }
            );
            if (!response.ok) {
                throw new Error("Identifiants incorrects");
            }
            const data = await response.json();
            const token = data.body.token;
            return token;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)