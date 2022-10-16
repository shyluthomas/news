import React from "react";
import PropTypes from 'prop-types';
import { Col,Row,  Card, CardImg,CardText, CardTitle } from 'reactstrap';
import * as Icon from 'react-feather';

let MainNewsComponent = ({newsCollection}) => {
let primeNews = newsCollection?.filter((item) => item.newsRank === 1);
let topNews = newsCollection?.filter((item) => item.newsRank === 2);
let normalNews = newsCollection?.filter((item) => item.newsRank === 0);

    return(
      <Col sm="12" lg="12">
      <Row>
          <Col sm="6" lg="6" >
            {
              primeNews ?             
              <Card body  >
                <CardImg alt="Card image cap" src={primeNews[0].image[0]} top width="100%" />
                <CardTitle tag="h2"> <b>{primeNews[0].title}</b></CardTitle>
                <CardText>
                <span style={{color:'red', marginRight:2}}>{primeNews[0].starter.toUpperCase()}</span>  
                <span>{primeNews[0].introduction}</span>
                </CardText>
                <div className='status-icons'>
                  <Icon.Eye size={20} ></Icon.Eye>  {primeNews[0].published}
                  <Icon.MessageSquare size={20}  className="m-2"></Icon.MessageSquare>1                          
                </div>
              </Card> :
              <span> News is not available</span>
              }
          </Col>
        
          <Col sm="6" lg="6" >
            { topNews ? 
              <Card body  >
                  <div className='d-flex flex-wrap'>
                    { topNews[0].image.map((item) => {
                     return (<img src={item} alt="norm" width='50%'></img>)
                   })}
                      </div>
                  <CardTitle tag="h3"><b>{topNews[0].title}</b></CardTitle>
                  <CardText>
                    <span style={{color:'blue', marginRight:4}}>{topNews[0].starter.toUpperCase()}</span> 
                    <span>{topNews[0].introduction}</span>
                  </CardText>
                  <div className='status-icons'>
                    <Icon.Eye size={20} ></Icon.Eye> {topNews[0].published}
                    <Icon.MessageSquare size={20}  className="m-2"></Icon.MessageSquare> 1                         
                </div>
            </Card> :
              <span>News is not available</span>
            }
            <p></p>

            {normalNews ? normalNews.map((item) => {
              return (  
                <>        
                    <Card body>
                      <Row>
                        <Col sm='8'  lg='8' xs='6'>
                          <h6>
                            {item.title}
                          </h6>
                        </Col> 
                        <Col sm='4' lg='4' xs='6'>
                          <img src={item.image[0]} alt="norm" height={60} width={100}></img>
                        </Col> 
                      </Row> 
                        <div className='status-icons'>
                          <Icon.Eye size={20} ></Icon.Eye> {item.published}
                      </div>
                    </Card>
                    <p></p>
                    </> 
              )
          }) : 
          <span>News is not available</span>        
        } 
          </Col>
      </Row>       
    </Col>

    );
}
MainNewsComponent.propTypes = {
  children: PropTypes.object
};
export default MainNewsComponent;