import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    userData: {
        firstName: 'Jean',
        lastName: 'Dupont',
        email: 'jean.dupont@example.com',
        accounts: [
            {id: 1, name: 'Compte Courant', balance: 2500},
            {id: 1, name: 'Livret A', balance: 7800},
        ],
    },
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;