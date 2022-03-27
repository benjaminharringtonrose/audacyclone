import { call, put, takeLatest } from 'redux-saga/effects';
import { keys } from '../../constants';
import { getString, storeString } from '../AsyncStorage';
import {
  BooleanPayloadAction,
  initApplicationFailed,
  initApplicationRequested,
  initApplicationSucceeded,
  setAllNotifications,
  setAutoDownloadEpisodes,
  setAutoplayRequested,
  setAutoplaySucceeded,
  setDeletePlayedEpisodes,
  setUseCellularData,
} from './slice';

function* initApplicationSaga() {
  try {
    const autoplayResponse: string = yield call(
      getString,
      keys.autoplayEnabled,
    );
    const allNotifcationsResponse: string = yield call(
      getString,
      keys.allNotificationsEnabled,
    );
    const useCellularDataResponse: string = yield call(
      getString,
      keys.useCellularDataEnabled,
    );
    const autoDownloadEpisodesResponse: string = yield call(
      getString,
      keys.autoDownloadEnabled,
    );
    const autoplayEnabled = autoplayResponse === 'true' ? true : false;
    const allNotificationsEnabled =
      allNotifcationsResponse === 'true' ? true : false;
    const useCellularDataEnabled =
      useCellularDataResponse === 'true' ? true : false;
    const autoDownloadEpisodes =
      autoDownloadEpisodesResponse === 'true' ? true : false;
    const data = {
      autoplayEnabled,
      allNotificationsEnabled,
      useCellularDataEnabled,
      autoDownloadEpisodes,
    };
    yield put(initApplicationSucceeded({ data }));
  } catch (error) {
    yield put(initApplicationFailed({ error }));
  }
}

function* setAutoplaySaga(action: BooleanPayloadAction) {
  const { enabled } = action.payload;
  try {
    const autoplayEnabled = enabled ? 'true' : 'false';
    yield call(storeString, keys.autoplayEnabled, autoplayEnabled);
    yield put(setAutoplaySucceeded({ enabled }));
  } catch (error) {
    console.log(error);
  }
}

function* setAllNotificationsSaga(action: BooleanPayloadAction) {
  const { enabled } = action.payload;
  try {
    const allNotificationsEnabled = enabled ? 'true' : 'false';
    yield call(
      storeString,
      keys.allNotificationsEnabled,
      allNotificationsEnabled,
    );
  } catch (error) {
    console.log(error);
  }
}

function* setUseCellularDataSaga(action: BooleanPayloadAction) {
  const { enabled } = action.payload;
  try {
    const useCellularDataEnabled = enabled ? 'true' : 'false';
    yield call(
      storeString,
      keys.useCellularDataEnabled,
      useCellularDataEnabled,
    );
  } catch (error) {
    console.log(error);
  }
}

function* setAutoDownloadEpisodesSaga(action: BooleanPayloadAction) {
  const { enabled } = action.payload;
  try {
    const autoDownloadEpisodesEnabled = enabled ? 'true' : 'false';
    yield call(
      storeString,
      keys.autoDownloadEnabled,
      autoDownloadEpisodesEnabled,
    );
  } catch (error) {
    console.log(error);
  }
}

function* setDeletePlayedEpisodesSaga(action: BooleanPayloadAction) {
  const { enabled } = action.payload;
  try {
    const deletePlayedEpisodesEnabled = enabled ? 'true' : 'false';
    yield call(
      storeString,
      keys.deletePlayedEpisodesEnabled,
      deletePlayedEpisodesEnabled,
    );
  } catch (error) {
    console.log(error);
  }
}

function* settingsSaga() {
  yield takeLatest(initApplicationRequested.type, initApplicationSaga);
  yield takeLatest(setAutoplayRequested.type, setAutoplaySaga);
  yield takeLatest(setAllNotifications.type, setAllNotificationsSaga);
  yield takeLatest(setUseCellularData.type, setUseCellularDataSaga);
  yield takeLatest(setAutoDownloadEpisodes.type, setAutoDownloadEpisodesSaga);
  yield takeLatest(setDeletePlayedEpisodes.type, setDeletePlayedEpisodesSaga);
}

export default settingsSaga;
