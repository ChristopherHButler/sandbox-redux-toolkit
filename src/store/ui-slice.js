import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      // we can 'mutate' state here because redux toolkit uses immer under the hood to ensure state is NOT mutated.
      state.cartIsVisible = !state.cartIsVisible;
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;