import React, { Component } from 'react';
import {BsPeopleCircle} from 'react-icons/bs'
import {Container, Button, Card, CardDeck, Nav, NavItem, NavLink} from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactStars from "react-rating-stars-component";
import { Carousel } from 'react-responsive-carousel';
import gambar1 from '../img/gambar1.jpg'
import gambar2 from '../img/gambar2.jpg'
import gambar3 from '../img/gambar3.jpg'
import gambarproduct1 from '../img/detailproduct1.jpg'
import gambarproduct2 from '../img/detailproduct2.jpg'
import gambarproduct3 from '../img/detailproduct3.jpg'
import gambarproduct4 from '../img/detailproduct4.jpg'

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='mt-4'>
                <Container>
                    <div className='productflex' style={{display:'flex', flexWrap:'wrap', position:'relative'}}>
                        <Carousel width='600px' infiniteLoop={true} showStatus={false} showThumbs={true} autoPlay={true}>
                            <div>
                                <img src={gambarproduct1} />
                                <h4 className="legend">Villa Oke</h4>
                            </div>
                            <div>
                                <img src={gambarproduct2} />
                                <h4 className="legend">Villa Oke</h4>
                            </div>
                            <div>
                                <img src={gambarproduct3} />
                                <h4 className="legend">Villa Oke</h4>
                            </div>
                            <div>
                                <img src={gambarproduct4} />
                                <h4 className="legend">Villa Oke</h4>
                            </div>
                        </Carousel>
                        <div className='ml-4'>
                            <h2>Villa Oke</h2>
                            <ReactStars
                                count={5}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <br/>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <br/>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <h2>$45</h2>
                                <select style={{width:'200px'}} name="pilih" id="">
                                    <option value="pilihan1">Select model</option>
                                </select>
                            </div>
                            <br/>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <br/>
                            <p>Villa ini adalah villa murah dan nyaman untuk anda inap <br/>karena memiliki banyak fasilitas yang telah disediakan</p>
                            <br/>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <br/>
                            <Button>Add to Cart</Button>
                        </div>
                    </div>
                    <p style={{borderBottom:'1px solid grey'}}></p>
                    <br/>
                    <div style={{textAlign:'center'}}>
                        <h1>Similar Product</h1>
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
                    </div>
                    <br/>
                    <br/>
                    <p style={{borderBottom:'1px solid grey'}}></p>
                    <div>
                        <h1>Review</h1>
                        <br/>
                        <br/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div style={{display:'flex'}}>
                                <BsPeopleCircle style={{fontSize:'60px'}}/>
                                <div className='ml-4'>
                                    <h4>Roberto Carlos</h4>
                                    <p>2 Agustus 2020</p>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>saya liburan bersama keluarga menginap disini dan semua anggota keluarga sangat senang karena <br/>pelayanannya yang ramah dan makanannya juga enak-enak.
                                    lokasinya pun strategis dekat dengan<br/> tempat wisata dan mudah dijangkau, </p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                            <div style={{display:'flex'}}>
                                <BsPeopleCircle style={{fontSize:'60px'}}/>
                                <div className='ml-4'>
                                    <h4>Roberto Carlos</h4>
                                    <p>2 Agustus 2020</p>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>saya liburan bersama keluarga menginap disini dan semua anggota keluarga sangat senang karena <br/>pelayanannya yang ramah dan makanannya juga enak-enak.
                                    lokasinya pun strategis dekat dengan<br/> tempat wisata dan mudah dijangkau, </p>
                            </div>
                        </div>
                    </div>
                    <footer style={{marginTop:'100px'}}>
                            <div style={{borderBottom:'1px solid grey'}}></div>
                            <Nav style={{justifyContent:'center'}}>
                                <NavItem>
                                    <NavLink>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        |
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        |
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        |
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        Help
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </footer>
                </Container>
            </div>
         );
    }
}
 
export default Product;