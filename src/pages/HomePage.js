import React, { Component } from 'react';
import { Container } from '../components/mdb/mdb';
//import './HomePage.css';
//import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;

class HomePage extends Component {
  render() {
    return (
      <div>
      <header>Header</header>
      <Container>
      HomePage
      </Container>
      </div>
    );
  }
}

export default HomePage;
