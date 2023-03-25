import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    email: ""
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload

    }
  }
})

export const { setLoggedIn, setEmail } = authSlice.actions

export default authSlice.reducer
