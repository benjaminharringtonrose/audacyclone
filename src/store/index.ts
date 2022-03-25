import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import navigationReducer from './navigation/slice';
import settingsReducer from './settings/slice';
import settingsSaga from './settings/sagas';

function* rootSaga() {
  yield fork(settingsSaga);
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  navigation: navigationReducer,
  settings: settingsReducer,
});

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
