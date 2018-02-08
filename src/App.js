import React, { Component } from 'react'
import { Button, Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Footer } from './components/mdb/mdb';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './components/svgIcons/icons/003-popcorn.svg';
import Routes from './Routes';
const NavLink = require('react-router-dom').NavLink;

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between'
};

class App extends Component {
  render() {
    return (
      <Router>
        <div style={containerStyle}>
            <Navbar className='lighten-2' color='indigo' light expand='lg' fixed='top' scrolling>
              <NavbarBrand href='/'>
                <img src={logo} className='App-logo' alt='logo' height='30px' /> NextFliks
              </NavbarBrand>
              
              <div className="" id="navbarSupportedContent">
                <NavbarNav className='mr-auto'>
                  <NavItem>
                    <NavLink className='nav-link' to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className='nav-link' to='/account'>Acount</NavLink>
                  </NavItem>
                </NavbarNav>
              </div>
            </Navbar>
            <main style={{marginTop: '4rem'}}>
                <Routes />
            </main>
          <Footer color='indigo'>
            <p className="footer-copyright mb-0">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.nextfliks.com"> NextFliks </a></p>
          </Footer>
        </div>
      </Router>
    );
  }
}

export default App;
