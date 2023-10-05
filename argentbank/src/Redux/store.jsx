import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import userSlice from "./reducers/userSlice";

export default configureStore({
    reducer:{
        auth : authSlice,
        user : userSlice,
    },
})