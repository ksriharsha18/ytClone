import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'searchResult',
    initialState: {
        items: []
    },
    reducer: {
        search: (state,action) => {
            state.items.concat(action.payload)
        }
    }
})

export const { search } = searchSlice.actions
export default searchSlice.reducer