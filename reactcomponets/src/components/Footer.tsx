import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Footer() {
    return ( 
        <Navbar bg="light" fixed='bottom' expand>
            <Container>
                footer section
            </Container>
        </Navbar>
    );
}

export default Footer;