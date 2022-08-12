import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import React, { Component }  from 'react';

const NavbarComponent = (props) => {
  return (
        <Navbar expand="lg" variant="dark" bg="dark">
          <Container>
            <Stack gap={2} className="col-md-5 mx-auto">
                <Navbar.Brand className="text-center">{props.title}</Navbar.Brand>
            </Stack>
          </Container>
        </Navbar>
      );
}

export default NavbarComponent;