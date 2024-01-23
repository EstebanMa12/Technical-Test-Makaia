import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, username, email } = action.payload;
            state.name = name;
            state.username = username;
            state.email = email;
        },
        login: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.name = "";
            state.username = "";
            state.email = "";
        },
    },
});


export const { addUser, login, logout } = userSlice.actions;
export default userSlice.reducer;