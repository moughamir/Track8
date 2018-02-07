import React, { Component } from 'react'
import { Button, Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from './components/mdb/mdb';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './components/svgIcons/icons/003-popcorn.svg';
import Routes from './Routes';
const NavLink = require('react-router-dom').NavLink;


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container tag='section' fluid='true'>
            <Navbar light lighten-5 expand='md' fixed='top' scrolling>
              <NavbarBrand href='/'>
                <img src={logo} className='App-logo' alt='logo' height='30px' /> <span className='ml-1 font-weight-normal align-middle'>Track8</span>
              </NavbarBrand>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/account">Account</NavLink>
            </Navbar>
            <main className='d-flex p-2 justify-content-center' style={{marginTop: '4rem', minHeight: 'calc(100vh - 4rem)'}}>
              <div className='align-self-center'>
                <Routes />
              </div>
            </main>
          </Container>
          <Footer color='indigo'>
            <p className="footer-copyright mb-0">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.nextfliks.com"> NextFliks </a></p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
