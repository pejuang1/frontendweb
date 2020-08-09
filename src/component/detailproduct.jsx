import React, { Component } from 'react';
import {Steps} from 'primereact/steps'
import {Container,Form, Col, Button, Nav, NavLink, NavItem} from 'react-bootstrap'
import gambar1 from '../img/gambar1.jpg'
import gambar2 from '../img/gambar2.jpg'
import {Spinner} from 'primereact/spinner'
import {Growl} from 'primereact/growl'


class Detailproduct extends Component {
    state = {
        activeIndex:0,
        value1:'1',
        value2:'1'
     }

    subtotal=()=>{
        const produk1 = this.state.value1 * 45
        const produk2 = this.state.value2 * 45
        const totalproduk = produk1 + produk2
        return totalproduk
    }

    pajak=()=>{
        return this.subtotal() * 0.1
    }

    totalharga=()=>{
        return this.subtotal() + this.pajak()
    }

    hargashipping=()=>{
        if(this.state.valueradio === true){
            return 0
        }else if(this.state.valueradio2 === true){
            return 20
        }
    }

    render() { 
        const items = [
            {
                label: 'Shopping Cart',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Jumlah Cart', detail: event.item.label});
                }
            },
            {
                label: 'Shipping Details',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Pengiriman', detail: event.item.label});
                }
            },
            {
                label: 'Payment Option',
                command: (event) => {
                    this.growl.show({severity:'info', summary:'Pilih Pembayaran', detail: event.item.label});
                }
            },
        ]
        if(this.state.activeIndex === 0){
            return ( 
                <div className='mt-4'>
                <Growl ref={(el) => {this.growl = el}}></Growl>
                <Container>
                    <div>
                    <Steps model={items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className='detailproductshipping' style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                        <div className='shippingdetails' style={{width:'45vw'}}>
                            <h2>Shopping Cart</h2>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <div style={{display:'flex', position:'relative', flexWrap:'wrap', justifyContent:'space-between'}}>
                            <div>
                                <img className='imageshopping' style={{width:'15vw'}} src={gambar1} alt=""/>
                            </div>
                            <div className='textvilla'>
                                <h4>Villa Oke</h4>
                                <p>Villa yang sangat indah dan nyaman</p>
                                <h4>$45</h4>
                            </div>
                            <div>
                                <Spinner inputStyle={{width:'100px'}} value={this.state.value1} size={30} onChange={(e) => this.setState({value1: e.value})} min={1} max={9999}/>
                            </div>
                            </div>
                            <br/>
                            <br/>
                            <div style={{display:'flex', position:'relative', justifyContent:'space-between'}}>
                            <div>
                                <img className='imageshopping' style={{width:'15vw'}} src={gambar2} alt=""/>
                            </div>
                            <div className='textvilla'>
                                <h4>Villa Oke</h4>
                                <p>Villa yang sangat indah dan nyaman</p>
                                <h4>$45</h4>
                            </div>
                            <div>
                                <Spinner className='spinner' inputStyle={{width:'100px'}} value={this.state.value2} size={30} onChange={(e) => this.setState({value2: e.value})} min={1} max={9999}/>
                            </div>
                            </div>
                            <br/>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                        </div>
                        <div className='detailproductshipping' style={{width:'30vw'}}>
                            <h2>Summary</h2>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <h5>ENTER COUPON CODE</h5>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <div style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                                <div>
                                    <h5>SUBTOTAL</h5>
                                    <h5>SHIPPING</h5>
                                    <h5>TAXES</h5>
                                </div>
                                <div>
                                    <h5>${this.subtotal()}</h5>
                                    <h5>$0</h5>
                                    <h5>${this.pajak()}</h5>
                                </div>
                            </div>
                            <p style={{borderBottom:'1px solid grey'}}></p>
                            <div style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                                <h5>TOTAL</h5>
                                <h5>${this.totalharga()}</h5>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <Button style={{width:'150px'}}>Next</Button>
                    <Button style={{width:'150px'}} className='ml-4'>Cancel</Button>
                </Container>
                    <footer style={{marginTop:'300px'}}>
                        <Container>
                            <div style={{borderBottom:'1px solid grey'}}></div>
                        </Container>
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
            </div>
         );
        }
        else if(this.state.activeIndex === 1){
            return(
                <div className='mt-4'>
                    <Growl ref={(el) => {this.growl = el}}></Growl>
                    <Container>
                        <div>
                            <Steps model={items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className='detailproductshipping' style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                            <div className='shippingdetails' style={{width:'45vw'}}>
                                <h2>Shipping Details</h2>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                        <Form.Control type="text" placeholder="First Name" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Control type="text" placeholder="Last Name" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Control placeholder="Address" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Control placeholder="Address 2" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" defaultValue="Choose...">
                                            <option>Country</option>
                                            <option>...</option>
                                        </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Control placeholder='City' />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Control type="text" placeholder="Zip/Postal Code" />
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Control type="text" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                                <br/>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <br/>
                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <div style={{backgroundColor:'grey', display:'flex', justifyContent:'space-between', height:'60px'}}>
                                        <div><input type="radio" name="shippingfree"/></div>
                                        <div>
                                            <h5>Free Shipping</h5>
                                            <p>Between 2-5 working days</p>
                                        </div>
                                    </div>
                                    <div style={{backgroundColor:'grey', display:'flex', justifyContent:'space-between', height:'60px'}}>
                                        <div><input type="radio" name="shippingfree"/></div>
                                        <div>
                                            <h5>Next Day Delivery $20</h5>
                                            <p>24 hour from checkout</p>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <br/>
                                <Button style={{width:'150px'}}>Next</Button>
                                <Button style={{width:'150px'}} className='ml-4'>Cancel</Button>
                            </div>
                            <div className='detailproductsummary' style={{width:'30vw'}}>
                                <h2>Summary</h2>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <div style={{display:'flex', position:'relative', flexWrap:'wrap'}}>
                                    <div>
                                        <img className='imagesummary' style={{width:'10vw'}} src={gambar1} alt=""/>
                                    </div>
                                    <div className='ml-4'>
                                        <h4>Villa Oke</h4>
                                        <h6>$45</h6>
                                    </div>
                                </div>
                                    <br/>
                                    <div style={{display:'flex', position:'relative', flexWrap:'wrap'}}>
                                        <div>
                                            <img className='imagesummary' style={{width:'10vw'}} src={gambar2} alt=""/>
                                        </div>
                                    <div className='ml-4'>
                                        <h4>Villa Oke</h4>
                                        <h6>$45</h6>
                                    </div>
                                </div>
                                <br/>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <h5>HAVE A VOUCHER</h5>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <div style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                                    <div>
                                        <h6>SUBTOTAL</h6>
                                        <h6>SHIPPING</h6>
                                        <h6>TAXES</h6>
                                    </div>
                                    <div>
                                        <h6>${this.subtotal()}</h6>
                                        <h6>$0</h6>
                                        <h6>${this.pajak()}</h6>
                                    </div>
                                </div>
                                <p style={{borderBottom:'1px solid grey'}}></p>
                                <div style={{display:'flex', flexWrap:'wrap', position:'relative', justifyContent:'space-between'}}>
                                    <h6>TOTAL</h6>
                                    <h6>${this.totalharga()}</h6>
                                </div>
                            </div>
                        </div>
                        <footer style={{marginTop:'300px'}}>
                            <Container>
                                <div style={{borderBottom:'1px solid grey'}}></div>
                            </Container>
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
            )
        }else{
            return (
                <div className='mt-4'>
                    <Growl ref={(el) => {this.growl = el}}></Growl>
                    <Container>
                        <Steps model={items} activeIndex={this.state.activeIndex} onSelect={(e) => this.setState({activeIndex: e.index})} readOnly={false} />
                    </Container>
                </div>
            )
        }
        }
    }
 
export default Detailproduct;