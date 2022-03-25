import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  initialized: boolean;
  initApplicationLoading: boolean;
  initApplicationError?: Error;
  autoplayEnabled: boolean;
  loadingAutoplayEnabled: boolean;
  errorAutoplayEnabled?: Error;
  allNotificationsEnabled: boolean;
  useCellularData: boolean;
  autoDownloadEpisodes: boolean;
  deletePlayedEpisodes: boolean;
}

const initialState: SettingsState = {
  initialized: false,
  initApplicationLoading: true,
  autoplayEnabled: false,
  loadingAutoplayEnabled: false,
  allNotificationsEnabled: false,
  useCellularData: false,
  autoDownloadEpisodes: false,
  deletePlayedEpisodes: false,
};

export type BooleanPayloadAction = PayloadAction<{ enabled: boolean }>;

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    initApplicationRequested() {},
    initApplicationSucceeded(state, action) {
      const { data } = action.payload;
      return {
        ...state,
        ...data,
        initialized: true,
      };
    },
    initApplicationFailed(state, action: PayloadAction<{ error: Error }>) {
      const { error } = action.payload;
      state.initApplicationError = error;
    },
    setAutoplayRequested(state, _: BooleanPayloadAction) {
      state.loadingAutoplayEnabled = true;
      state.errorAutoplayEnabled = undefined;
    },
    setAutoplaySucceeded(state, action: BooleanPayloadAction) {
      const { enabled } = action.payload;
      state.loadingAutoplayEnabled = false;
      state.autoplayEnabled = enabled;
    },
    setAutoplayFailed(state, action: PayloadAction<{ error: Error }>) {
      const { error } = action.payload;
      state.loadingAutoplayEnabled = false;
      state.errorAutoplayEnabled = error;
    },
    setAllNotifications(state, action: BooleanPayloadAction) {
      const { enabled } = action.payload;
      state.allNotificationsEnabled = enabled;
    },
    setUseCellularData(state, action: BooleanPayloadAction) {
      const { enabled } = action.payload;
      state.useCellularData = enabled;
    },
    setAutoDownloadEpisodes(state, action: BooleanPayloadAction) {
      const { enabled } = action.payload;
      state.autoDownloadEpisodes = enabled;
    },
    setDeletePlayedEpisodes(state, action: BooleanPayloadAction) {
      const { enabled } = action.payload;
      state.deletePlayedEpisodes = enabled;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  initApplicationRequested,
  initApplicationSucceeded,
  initApplicationFailed,
  setAutoplayRequested,
  setAutoplaySucceeded,
  setAutoplayFailed,
  setAllNotifications,
  setUseCellularData,
  setAutoDownloadEpisodes,
  setDeletePlayedEpisodes,
} = settingsSlice.actions;

export default settingsSlice.reducer;
