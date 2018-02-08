import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Collapse, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './mdb/mdb';
import logo from './svgIcons/icons/005-tv-screen.svg';
const NavLink = require('react-router-dom').NavLink;

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Navbar className='lighten-2' color='indigo' light expand='lg' fixed='top' scrolling>
        <Container>
          <NavbarBrand href="/">
            <img src={logo} className='App-logo' alt='logo' height='30px' />
            <strong>NextFliks</strong>
          </NavbarBrand>
        { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
          <Collapse isOpen = { this.state.collapse } navbar>
            <NavbarNav className="ml-auto">
              <NavItem active>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tv">Tv Shows</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/movies">Movies</NavLink>
              </NavItem>
              <NavItem>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>Account</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another Action</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                  <DropdownItem href="#">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </NavItem>
              <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
              </form>
            </NavbarNav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
