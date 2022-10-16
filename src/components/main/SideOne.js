import React from 'react'
import data from './data.json'
import AddIcon from '@mui/icons-material/Add';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AddCommentIcon from '@mui/icons-material/AddComment';

function SideOne() {
    return (
        <div className='side-one'>
            <div className='side-one-top'>
                Coming Soon
            </div>
            <div className='side-one-bottom'>
                <div className='side-one-bottom-left'>
                    <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="a man" height="500px" width="400px" />
                    <div className='news1-heading'>LIVE: GREG INGLIS TO ANNOUNCE NRL RETIREMENT</div>
                    <p className='news-title'>
                        <span >RABBITOHS STAR</span> Greg Inglis has arrived at South Sydney headquaters and will front a media conference later this morning to announce his retirement from rugby league
                    </p>
                    <div className='slideBottomIcons'>
                            <div className='icon-alignments'>
                                <AccessTimeFilledIcon></AccessTimeFilledIcon>2m
                            </div>
                            <div  className='icon-alignments ml-5'>
                                <AddCommentIcon></AddCommentIcon>2m
                            </div>
                    </div>
                </div>
                <div className='side-one-bottom-right'>
                    <div>
                        <div className='side-one-btm-rht-imagecol'>
                            <img src="https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/zozibini-tunzi-top-20-most-beautiful-women-in-the-world-2022-202003-1655117381.jpg?impolicy=Medium_Widthonly&w=450" alt='woman1' height="200px" />
                            <img src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt='woman2' height="200px" />
                        </div>
                        <span className='news1-heading'>
                            Opal Tower Units still closed as work only approved now
                        </span>
                        <p style={{ fontWeight: 500, fontSize: '0.9rem' }}><span style={{ color: 'blue', fontWeight: 700 }}> ESTABLISHED</span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <div className='sub-icons'>
                            <div className='icon-alignments'>
                                <AccessTimeFilledIcon></AccessTimeFilledIcon>2m
                            </div>
                            <div  className='icon-alignments ml-5'>
                                <AddCommentIcon></AddCommentIcon>2m
                            </div>
                        </div>
                    </div>
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className="side-one-bottom-right-newssection">
                                    <div className='side-one-bottom-right-post'>
                                        <div className='post-head'>
                                            <AddIcon fontSize="small"></AddIcon>
                                            <span>{item.description}</span>
                                        </div>
                                        <img src={item.image} alt="news" width="100px" height="80px" />
                                    </div>
                                    <div className='icon-alignments border-bottom-cut'>
                                        <AccessTimeFilledIcon></AccessTimeFilledIcon>{item.poston}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SideOne
