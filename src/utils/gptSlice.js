import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptSuggestions: []
    },
    reducers: {
        toggleGptSearchView : (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSuggestions: (state, action) => {
            state.gptSuggestions = action.payload;
        }
    }
});

export const {toggleGptSearchView, addGptSuggestions} = gptSlice.actions;

export default gptSlice.reducer;