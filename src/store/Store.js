import { createStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import NewsReducer from './news/NewsSlice';
import MainSaga from '../sagas/mainSaga';
// export const store = configureStore({
//   reducer: {
//     news: NewsReducer,
//   },
// });

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  news: NewsReducer
})
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(MainSaga);

export default store;
