import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//Async thunks for async calls from server -------------------------------------------------------------------->

//Login User In Login Page

/* Use this api to get all users
export const fetchAllUsers = createAsyncThunk('user/fetchAllUsers', async () => {
    return await fetch(`https://dummyjson.com/users`).then((result) => result.json())
})*/

export const login = createAsyncThunk('user/login', async ({ username, password }) => {
    //Returns Token
    return await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username,
            password,
            // expiresInMins: 60, // optional
        })
    }).then(res => res.json()).catch(err => console.log(err))
})

// -------------------------------------------------------------------------------------------------------------->

//Reducer ------------------------------------------------------------------------------------------------>

const AuthStore = createSlice({
    name: 'ProductStore',
    initialState: {
        user: {}
    },
    reducers: {
        // Create reducers for state mutation
    },
    //Extra reducers for handling async mutations
    extraReducers: function (builder) {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

//----------------------------------------------------------------------------------------------------------->

export default AuthStore.reducer;