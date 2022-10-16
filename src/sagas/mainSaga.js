/* eslint-disable no-unused-vars */
import { call, put, take, takeEvery } from 'redux-saga/effects'
import * as news from '../store/news/NewsSlice';
import data from './data.json';

function* fetchLatestNews(action) {
   try {
     // const user = yield call(axiosInstance, action.payload.userId);
     const user=[ { collectiontype: 'home', collectionid:1 }, { collectiontype: 'landing', collectionid:2 }];
      yield put(news.UpdateLatestNews(user));
   } catch (e) {
      yield put(news.UpdateLatestNews(null));
   }
}

function* fetchNewsCollection(action) {
   try {
      const collectionid = action.payload;
     const homeNewsCollection = data.filter((item) => item.collectionid === collectionid);
      yield put(news.UpdateNewsCollection(homeNewsCollection));
   } catch (e) {
      yield put(news.UpdateNewsCollection(null));
   }
}

/*
  Allows concurrent fetches of user.
*/
function* mainSaga() {
   yield takeEvery(news.FetchLatestNews, fetchLatestNews);
   yield takeEvery(news.FetchNewsCollection, fetchNewsCollection);
   
}


export default mainSaga;