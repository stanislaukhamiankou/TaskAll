import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        users: null,
        usersFilter: ''
    },
    reducers: {
        usersLoadStart(state) {
            state.users = null;
        },

        usersLoadSuccess(state, action) {
          state.users = action.payload;  
        },

        removeUser(state, action) {
            state.users = [ ...state.users.filter(user => user !== action.payload) ];
        },

        setUsersFilter(state, action) {
            state.usersFilter = action.payload;
        },

        addNewUser(state, action) {
            state.users = [...state.users, action.payload];
        },

        editUser(state, action) {
            const editUserIndex = state.users.findIndex(user => user.id === action.payload.user.id);
            state.users = [...state.users.slice(0, editUserIndex), action.payload.user, ...state.users.slice(editUserIndex + 1)];
        }
    }
});

export default toolkitSlice.reducer;
export const { usersLoadStart, usersLoadSuccess, removeUser, setUsersFilter, addNewUser, editUser } = toolkitSlice.actions;