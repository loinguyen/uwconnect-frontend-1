import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './profileSlice'

export default configureStore({
    reducer: {
        user: profileReducer,
    },
})