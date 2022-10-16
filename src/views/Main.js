import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchLatestNews, FetchNewsCollection} from '../store/news/NewsSlice';
import SideOne from "../components/main/SideOne";
import SideTwo from "../components/main/SideTwo";
import './main.scss'
import Loader from "../layouts/loader/Loader";

const Main = () => {

  const dispatch = useDispatch();
  const latestNews = useSelector((state) => state.news.latestNews)
  const newsCollection = useSelector((state) => state.news.newsCollection);
  useEffect(() => {
    dispatch(FetchLatestNews(true));
  },[]);
  useEffect(() => {
    if(latestNews.length > 0) {
      const homeData = latestNews.filter((item) => item.collectiontype === 'home');
      console.log('homeData,',homeData[0].collectionid);
      if(homeData.length > 0) {
        dispatch(FetchNewsCollection(homeData[0]?.collectionid));
      }       
    }
  },[latestNews]);

  console.log('first,',latestNews)
  return (
    <div className="App">
        { newsCollection.length > 0 ?
            <SideOne newsCollection = {newsCollection}></SideOne>
            :
            <Loader></Loader>
          }
          <SideTwo/>
    </div>
  );
};

export default Main;
