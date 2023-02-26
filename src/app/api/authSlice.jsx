import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: undefined
  },
  reducers: {
    setCredentials : (state, {payload}) => {
      state.user = payload.user
      state.token = payload.token
    },

    logout: (state, action) => {
      state.user = {};
      state.token = undefined
    }
  }
})

export const {setCredentials, logout} = authSlice.reducer
export const currentUser = (state) => state.auth.user
export default authSlice.actions