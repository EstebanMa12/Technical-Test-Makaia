import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticate: false,
    user: null,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setError: (state, action) => {
        state.error = action.payload;
        },
        setIsAuthenticate: (state, action) => {
        state.isAuthenticate = action.payload;
        },
    },
});


export const { 
    setUser,
    setError,
    setIsAuthenticate,
} = userSlice.actions;
export default userSlice.reducer;