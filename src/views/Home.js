import { Col, Row} from 'reactstrap';
import './home.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FetchLatestNews, FetchNewsCollection} from '../store/news/NewsSlice';

import TopareaComponent from '../components/home/topareaComponent';
import MainNewsComponent from '../components/home/mainNewsComponent';
import RightAreaComponent from '../components/home/rightAreaComponent';
import { useEffect } from 'react';
import Loader from "../layouts/loader/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector((state) => state.news.latestNews)
  const newsCollection = useSelector((state) => state.news.newsCollection);
  useEffect(() => {
    dispatch(FetchLatestNews(true));
  },[dispatch]);
  useEffect(() => {
    if(latestNews.length > 0) {
      const homeData = latestNews.filter((item) => item.collectiontype === 'home');
      console.log('homeData,',homeData[0].collectionid);
      if(homeData.length > 0) {
        dispatch(FetchNewsCollection(homeData[0]?.collectionid));
      }       
    }
  },[latestNews, dispatch]);

  console.log('first,',latestNews)
  return (
    <div className='home '>
      {/***Top Cards***/}
     
      <Row >
        <Col sm="8" lg="8" >
          <Row>
            {/* Top section empty------ */}
           <TopareaComponent></TopareaComponent>
          {/* Top section empty------ */}
          { newsCollection.length > 0 ?
            <MainNewsComponent newsCollection = {newsCollection}></MainNewsComponent>
            :
            <Loader></Loader>
          }
          </Row>          
        </Col>    

        <RightAreaComponent></RightAreaComponent>
       
      </Row>     
     
    </div>
  );
};

export default Home;
