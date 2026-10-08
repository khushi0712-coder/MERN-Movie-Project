import { createSlice } from "@reduxjs/toolkit";
import { serializeAuthUser } from "../../utils/serialize-auth-user";

const getStoredUser = () => {
    const storedUser = sessionStorage.getItem('user');
    if (!storedUser) {
        return false;
    }

    const user = serializeAuthUser(JSON.parse(storedUser));
    if (!user) {
        sessionStorage.removeItem('user');
        return false;
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    return user;
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: getStoredUser(),
    },
    reducers: {
        loginReducer : (state, action) => {
            const user = serializeAuthUser(action.payload);
            state.user = user;
            if (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
            } else {
                sessionStorage.removeItem('user');
            }
        },
        logoutReducer : (state) => {
            state.user = false;
            sessionStorage.removeItem('user');
        },
    }
});

export const { loginReducer,logoutReducer} = authSlice.actions;

export default authSlice.reducer;
