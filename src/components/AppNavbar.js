import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, NavItem, Collapse, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from './mdb/mdb';
import logo from './svgIcons/icons/005-tv-screen.svg';
const NavLink = require('react-router-dom').NavLink;
const avatarStyle = {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
}
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
          {!this.state.isWideEnough && <NavbarToggler onClick ={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="mr-auto" onClick={this.onClick}>
              <NavItem active>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tv">Tv Shows</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/movies">Movies</NavLink>
              </NavItem>
            </NavbarNav>
            
            <NavbarNav className='ml-auto nav-flex-icons'>
              <NavItem>
                <Dropdown className='avatar' isOpen={this.state.dropdownOpen} toggle={this.toggle} style={avatarStyle}>
                  <DropdownToggle nav>
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" class="img-fluid rounded-circle z-depth-0" alt="avatar image"/>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/profile">My profile</DropdownItem>
                    <DropdownItem href="#">Settings</DropdownItem>
                    <DropdownItem href="/logout">Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AppNavbar;
