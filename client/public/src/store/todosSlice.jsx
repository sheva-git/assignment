import { createSlice } from '@reduxjs/toolkit'
const initValue = []

const todosSlice = createSlice({
   
    initialState: initValue,
    reducers: {
        updateTodos: (state, action) => {
            state = action.payload.newArray
        }
    }

})
export const { updateTodos } = todosSlice.actions
export default todosSlice.reducer