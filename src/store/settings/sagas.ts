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
  setAutoplayFailed,
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
    const autoplayEnabled = autoplayResponse === 'true' ? true : false;
    const data = {
      autoplayEnabled,
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
    yield put(setAutoplaySucceeded({ enabled: true }));
  } catch (error) {
    yield put(setAutoplayFailed({ error }));
  }
}

function* setAllNotificationsSaga() {}

function* setUseCellularDataSaga() {}

function* setAutoDownloadEpisodesSaga() {}

function* setDeletePlayedEpisodesSaga() {}

function* settingsSaga() {
  yield takeLatest(initApplicationRequested.type, initApplicationSaga);
  yield takeLatest(setAutoplayRequested.type, setAutoplaySaga);
  yield takeLatest(setAllNotifications.type, setAllNotificationsSaga);
  yield takeLatest(setUseCellularData.type, setUseCellularDataSaga);
  yield takeLatest(setAutoDownloadEpisodes.type, setAutoDownloadEpisodesSaga);
  yield takeLatest(setDeletePlayedEpisodes.type, setDeletePlayedEpisodesSaga);
}

export default settingsSaga;
