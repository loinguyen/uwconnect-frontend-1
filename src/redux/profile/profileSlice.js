import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        email: '',
        username: '',
        first_name: '',
        last_name: '',
        image_url: '',
        gender: '',
        faculty: '',
        program: '',
        year: 0,
        courses: [],
        tags: [],
        profile_visible: true,
        agreement: false,
        id: '',
    },
    reducers: {
        setUser: (state, action) => {
            Object.assign(state, action.payload)
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setUserName: (state, action) => {
            state.userName = action.payload
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setImgURL: (state, action) => {
            state.imgURL = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setFaculty: (state, action) => {
            state.faculty = action.payload
        },
        setProgram: (state, action) => {
            state.program = action.payload
        },
        setYear: (state, action) => {
            state.year = action.payload
        },
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        setTags: (state, action) => {
            state.tags = action.payload
        },
        setProfileVisible: (state, action) => {
            state.profileVisible = action.payload
        },
        setAgreement: (state, action) => {
            state.agreement = action.payload
        },
        setID: (state, action) => {
            state.id = action.payload
        },
    },
})

export const { setUser, setCourses, setEmail, setUserName, setFaculty, setGender, setID, setImgURL, setProfileVisible, setProgram, setTags, setFirstName, setLastName, setAgreement, setYear } = profileSlice.actions

export default profileSlice.reducer
