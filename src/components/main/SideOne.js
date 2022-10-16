import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCommentIcon from '@mui/icons-material/AddComment';

function SideOne({newsCollection}) {
let primeNews = newsCollection?.filter((item) => item.newsRank === 1);
let topNews = newsCollection?.filter((item) => item.newsRank === 2);
let normalNews = newsCollection?.filter((item) => item.newsRank === 0);
    return (
        <div className='side-one'>
            <div className='side-one-top'>
                Coming Soon
            </div>
            <div className='side-one-bottom'>
            {
              primeNews ?
                <div className='side-one-bottom-left'>
                    <img src={primeNews[0].image[0]}  alt="a man"  />
                    <div className='news1-heading'>{primeNews[0].title}</div>
                    <p className='news-title'>
                        <span className='starter'>{primeNews[0].starter.toUpperCase()}</span> 
                        {primeNews[0].introduction}
                    </p>
                    <div className='slideBottomIcons'>
                            <div className='icon-alignments'>
                                <AccessTimeFilledIcon fontSize="small"></AccessTimeFilledIcon>{primeNews[0].published}
                            </div>
                            <div  className='icon-alignments ml-5'>
                                <AddCommentIcon fontSize="small"></AddCommentIcon>2m
                            </div>
                    </div>
                </div> :
                <span>News is not available</span>
            }
                <div className='side-one-bottom-right'>
                { topNews ? 
                    <div>
                        <div className='side-one-btm-rht-imagecol'>
                        { topNews[0].image.map((item) => {
                            return (<img src={item} alt="norm" width='50%' ></img>)
                        })}
                           
                        </div>
                        <span className='news1-heading'>
                        {topNews[0].title}
                        </span>
                        <p className='news-title-top'><span className='starter-top' > {topNews[0].starter.toUpperCase()}</span>
                        {topNews[0].introduction}
                         </p>
                        <div className='sub-icons'>
                            <div className='icon-alignments'>
                                <AccessTimeFilledIcon fontSize="small"></AccessTimeFilledIcon>{topNews[0].published}
                            </div>
                            <div  className='icon-alignments ml-5'>
                                <AddCommentIcon fontSize="small"></AddCommentIcon>2m
                            </div>
                        </div>
                    </div> :
                    <span>News is not available</span>
                    }
                    {
                        normalNews ? normalNews.map((item) => {
                            return (
                                <div key={item.id} className="side-one-bottom-right-newssection">
                                    <div className='side-one-bottom-right-post'>
                                        <div className='post-head'>
                                            <AddIcon fontSize="small"></AddIcon>
                                            <span> {item.title}</span>
                                        </div>
                                        <img src={item.image[0]} alt="news" width="100px" height="80px" />
                                    </div>
                                    <div className='icon-alignments border-bottom-cut'>
                                        <AccessTimeFilledIcon fontSize="small"></AccessTimeFilledIcon>{item.published}
                                    </div>
                                </div>
                            )
                        }) :
                        <span>News is not available</span>
                    }

                </div>
            </div>
        </div>
    )
}

export default SideOne
