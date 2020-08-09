import React, { Component } from 'react';
import Footers from 'rc-footer'
import 'rc-footer/assets/index.css'
import ReactStars from "react-rating-stars-component";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Card, CardDeck, Container} from 'react-bootstrap'
import imgHome1 from '../img/imagehome1.jpg'
import imgHome2 from '../img/imagehome2.jpg'
import imgHome3 from '../img/imagehome3.jpg'
import gambar1 from '../img/gambar1.jpg'
import gambar2 from '../img/gambar2.jpg'
import gambar3 from '../img/gambar3.jpg'
import gambar4 from '../img/gambar4.jpg'
import gambar5 from '../img/gambar5.jpg'
import gambar6 from '../img/gambar6.jpg'
import logo from '../img/logofix.png'


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
class Home extends Component {
    state = {  }

    render() { 
        return ( 
            <div style={{fontFamily:'roboto', marginTop:'50px',textAlign:'center'}}>
                <div className='backgroundhome'>
                    <br/>
                    <br/>
                    <h1 style={{color:'white'}}>GET AND ENJOY AT LOW PRICE</h1>
                    <br/>
                    <center>
                    <p style={{borderBottom:'2px solid white', width:'300px',WebkitBoxShadow:'0px 7px 15px -3px rgba(23,53,66,0.71)', MozBoxShadow:'0px 7px 15px -3px rgba(23,53,66,0.71)',boxShadow:'0px 7px 15px -3px rgba(23,53,66,0.71)'}}></p>
                    </center>
                    <br/>
                    <br/>
                    <Carousel
                        swipeable={false}
                        slidesToSlide={1}
                        arrows={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        // customTransition="all .5"
                        transitionDuration={2000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                        >
                        <div><img className='img1' style={{width:'80%', borderRadius:'15px'}} src={imgHome1} alt=""/></div>
                        <div><img className='img1' style={{width:'80%', borderRadius:'15px'}} src={imgHome2} alt=""/></div>
                        <div><img className='img1' style={{width:'80%', borderRadius:'15px'}} src={imgHome3} alt=""/></div>
                        <div><img className='img1' style={{width:'80%', borderRadius:'15px'}} src={imgHome3} alt=""/></div>
                    </Carousel>;
                    <br/>
                    <br/>
                    <button className='btn btn' style={{width:'200px', fontSize:'18px', backgroundColor:'white', color:'#184ba0', fontWeight:'bold', WebkitBoxShadow:'-1px 2px 17px 1px rgba(0,0,0,0.86)',MozBoxShadow:'-1px 2px 17px 1px rgba(0,0,0,0.86)',boxShadow:'-1px 2px 17px 1px rgba(0,0,0,0.86)'}}>Shop Now</button>
                </div>
                <Container>
                    <CardDeck style={{marginTop:'100px'}}>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar1} />
                            <Card.Body>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar2} />
                            <Card.Body>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar3} />
                            <Card.Body>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <CardDeck style={{marginTop:'50px'}}>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar4} />
                            <Card.Body>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar5} />
                            <Card.Body>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{borderRadius:'15px'}}>
                            <Card.Img style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px'}} variant='top' src={gambar6} />
                            <Card.Body>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                <Card.Title style={{textAlign:'start'}}>Hotel Kutai</Card.Title>
                                <Card.Title> <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    /></Card.Title>
                                </div>
                                <Card.Text style={{textAlign:'start'}}>$35</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                <br/>
                <br/>
                <p style={{borderBottom:'1px solid black'}}></p>
                <br/>
                <div className='backgroundbawah'>
                    <div className='textbawah'>
                        <h2 className='tulisanpertama' style={{color:'white', fontWeight:'bold', fontSize:'3.5vw'}}>Receive exclusive offers, inspirational<br/> stories and travel regulation updates.</h2>
                        <h4 className='tulisankedua' style={{color:'white', fontSize:'1.5vw'}}>Become a subscriber and receive great tips on travel planning sent to your inbox!</h4>
                    </div>
                </div>
                <br/>
                <br/>
                <p style={{borderBottom:'1px solid black'}}></p>
                <br/>
                </Container>
                <Footers
                style={{width:'100%'}}
                theme='#ac0501'
                columns ={[
                    {
                        title: (
                            <div><img src={logo} alt=""/></div>
                        ),
                        items:[
                            {
                                title:'Jl Kusuma Bangsa No 5, Surabaya',
                            }
                        ]
                    },
                    {
                        title: 'Main Menu',
                        items:[
                            {
                                title:'Home'
                            },
                            {
                                title:'About'
                            },
                            {
                                title:'Shop',
                            },
                            {
                                title:'Help',
                            }
                        ]
                    },
                    {
                        title: 'Company',
                        items:[
                            {
                                title:'The Company'
                            },
                            {
                                title:'Career'
                            },
                            {
                                title:'Press'
                            }
                        ]
                    },
                    {
                        title: 'Discover',
                        items:[
                            {
                                title:'The Team'
                            },
                            {
                                title:'Our History'
                            },
                            {
                                title:'Brand Motto'
                            }
                        ]
                    },
                    {
                        title: 'Find Us On',
                        items:[
                            {
                                title:'Facebook'
                            },
                            {
                                title:'Twitter'
                            },
                            {
                                title:'Instagram'
                            }
                        ]
                    }
                ]}
                />
            </div>
         );
    }
}
 
export default Home;