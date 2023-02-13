import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (  
        <Navbar bg='light' expand="lg" fixed='top'>
            <Navbar.Brand>Smartbrainbox</Navbar.Brand>
        </Navbar>
    );
}

export default Header;