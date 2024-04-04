import { createSlice } from '@reduxjs/toolkit'
const initValue = ({ todos: [] },{users:[]},{posts:[]})

const sliceSlice = createSlice({
   name:"sliceSlice",
    initialState: initValue,
    reducers: {
        updateTodos: (state, action) => {
            state.todos = action.payload
        },
        updateUsers: (state, action) => {
            state.users = action.payload
        },
        updatePosts: (state, action) => {
            state.posts = action.payload
        }
    }

})
export const { updateTodos,updateUsers,updatePosts } = sliceSlice.actions
export default sliceSlice.reducer