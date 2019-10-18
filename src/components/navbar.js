
import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import logo from '../img/logo.png'

import '../css/navbar.css'

class Navigation extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar  expand="md">

            <NavbarBrand className="NavbarBrand" href="/"><img src={logo} alt=" "></img> Plantr</NavbarBrand>


              <Nav className="ml-auto" navbar>
                  <NavLink className="navlink" tag={Link} to="/signin">Sign In/join</NavLink>
              <NavLink  className="navlink" tag={Link} to="/products">Search</NavLink>
                <NavLink   className="navlink" tag={Link} to="/aboutus">About Us</NavLink>

              </Nav>

          </Navbar>
        </div>
      );
    }
  }
export default Navigation
