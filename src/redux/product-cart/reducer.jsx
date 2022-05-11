import { createSlice } from '@reduxjs/toolkit';

const currentSlice = createSlice({
    name: 'product',
    initialState: {
        currentCart: null
    },
    reducers: {
        setCurrentItem: (state, action) => {
            state.currentCart = action.payload;
        }
    }
});

export const { setCurrentItem } = currentSlice.actions;
export default currentSlice.reducer;