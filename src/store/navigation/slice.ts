import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NavigationState {
  isPlayerShown: boolean;
}

const initialState: NavigationState = {
  isPlayerShown: false,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    showPlayer(state, _: PayloadAction<undefined>) {
      state.isPlayerShown = true;
    },
    hidePlayer(state, _: PayloadAction<undefined>) {
      state.isPlayerShown = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showPlayer, hidePlayer } = navigationSlice.actions;

export default navigationSlice.reducer;
