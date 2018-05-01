import React from 'react'
import Link from 'gatsby-link'

import waddlLogo from '../../assets/images/waddl_logo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button 
} from 'reactstrap';

const logo = {
    width: '30px',
    height: 'auto'
};

export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

      const pageType = props.pageType;
    this.state = {
      fixed: true
    }
  }
  render() {
    return <div >
        <Navbar color="light" light expand="xs">
          <Link to="/">
            <NavbarBrand>
              <img style={logo} src={waddlLogo}/> {' '}
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/research">
                  <Button color="primary" size="sm">Share with friends</Button>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>;
  }
}

