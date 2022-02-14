import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        users: null,
        usersFilter: '',
        filterByEmail: '',
        filterByUsername: '',
        filterByPhone: ''
    },
    reducers: {
        usersLoadStart(state) {
            return {
                ...state,
                users: null
            }
        },

        usersLoadSuccess(state, action) {
          return {
              ...state,
              users: action.payload
          }
        },

        removeUser(state, action) {
            return {
                ...state,
                users: [ ...state.users.filter(user => user.id !== action.payload.id) ]
            }
        },

        setUsersFilter(state, action) {
            return {
                ...state,
                usersFilter: action.payload
            }
        },

        addNewUser(state, action) {
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        },

        editUser(state, action) {

            const editUserIndex = state.users.findIndex(user => user.id === action.payload.user.id);
            
            return {
				...state,
				users: [...users.slice(0, editUserIndex), action.payload.user, ...users.slice(editUserIndex + 1)]
			};
        },

        setFilterByName(state) {
            return {
                ...state,
                filterByUsername: 'Bret'
            }
        },

        setFilterByEmail(state) {
            return {
                ...state,
                filterByEmail: 'Karley_Dach@jasper.info'
            }
        },

        setFilterByPhone(state) {
            return {
                ...state,
                filterByPhone: '010-692-6593 x09125'
            }
        }
    }
});

export default toolkitSlice.reducer;
export const { usersLoadStart, usersLoadSuccess, removeUser, setUsersFilter, addNewUser, editUser, setFilterByName, setFilterByEmail, setFilterByPhone } = toolkitSlice.actions;