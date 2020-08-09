import React, { Component } from 'react';
import {Nav,Navbar,Form,FormControl, Button} from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'


class Header extends Component {
    state = {  }
    render() { 
        return ( 
        <div className='mt-2' style={{fontFamily:'kanit'}}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Penginapan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder='Search' className="mr-sm-2" />
                    </Form>
                        <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link className='garis'>|</Nav.Link>
                        <Nav.Link href="/product">Product</Nav.Link>
                        <Nav.Link className='garis'>|</Nav.Link>
                        <Nav.Link href="/detailproduct">Detail Product</Nav.Link>
                        <Nav.Link className='garis'>|</Nav.Link>
                        <Nav.Link href="/">About</Nav.Link>
                        <Nav.Link className='garis'>|</Nav.Link>
                        <Nav.Link href="/">Shop</Nav.Link>
                        <Button className='ml-3'><FaShoppingCart className='mr-2'/>Your Cart</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
        );
    }
}
 
export default Header;