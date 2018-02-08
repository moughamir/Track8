import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, EdgeHeader, FreeBird, Row, Col, Container } from '../components/mdb/mdb';
import './HomePage.css';
//import { EdgeHeader, FreeBird, Container, Col, Row, CardBody, Fa } from 'mdbreact';
const NavLink = require('react-router-dom').NavLink;
const headerBg = {
  backgroundImage: 'linear-gradient(to top, rgb(121, 134, 204), rgba(255, 255, 255, 0) 200%), url("assets/header.jpg")',
  backgroundSize: 'contain',
  animation: 'animatedBackground 80s linear infinite'
};
const btn = {
  background: '#324191'
};
class HomePage extends Component {
  render() {
    return (
      <div>
      <EdgeHeader tag='header' color='indigo darken-3' style={headerBg}/>
      <FreeBird>
        <Row>
          <Col md='10' className='mx-auto float-none white z-depth-1 py-2 px-2'>
            <CardBody>
              <h2 className='h2-responsive text-center'><strong>NextFliks</strong></h2>
              <p className='pb-4'>Automatically Track your favorite shows.</p>
            </CardBody>
          </Col>
        </Row>
      </FreeBird>
      <Container>
        <Row>
          <Col md='10' className='mx-auto mt-4'>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <p className='text-center'>Let's make this simple and beautiful.</p>
            <hr />
            <h3 className='text-center mb-3'>See it in action</h3>
            <Row>
              <Col md='4' className='text-center home-feature-box'>
                <Card>
                  <CardImage className='img-fluid' src='https://picsum.photos/708/472/?random'/>
                  <CardBody>
                  <CardTitle>Game Of Throws</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                    <Button className='indigo darken-2' href="/account">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4' className='text-center home-feature-box'>
                <Card>
                  <CardImage className='img-fluid' src='https://picsum.photos/708/472/?random'/>
                  <CardBody>
                  <CardTitle>Full Rock Alchemy</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                    <Button className='indigo darken-2' href="/account">Button</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md='4' className='text-center home-feature-box'>
                <Card>
                  <CardImage className='img-fluid' src='https://picsum.photos/708/472/?random'/>
                  <CardBody>
                  <CardTitle>Life Note :3</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</CardText>
                    <Button className='indigo darken-2' href="/account">Button</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default HomePage;
