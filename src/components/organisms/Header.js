import React from 'react'
import Link from 'gatsby-link'

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

const eediSiteBar = {
    backgroundColor: "#fff !important"
};

const eediLogoText = {
    color: "#333",
    fontSize: "16px",
};

const siteBarItemActive = {
    color: '#333',
    fontSize: '14px',
    marginRight: '8px',
    textDecoration: 'underline',
};

const siteBarItem = {
    color: '#333',
    fontSize: '14px',
    marginRight: '8px',
};

const siteBarButton = {
    marginTop: '4px',
    marginRight: '10px'
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        const pageType = props.pageType;

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
        return <div>
            <Navbar style={eediSiteBar} expand="md">
                <Link>
                    <NavbarBrand>
                        <span style={eediLogoText}>Eedi</span>
                    </NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/our-story">
                                <NavLink style={this.props.pageType === 'about' ? siteBarItemActive : siteBarItem} >Our Story</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/research">
                                <NavLink style={siteBarItem} >Research</NavLink>
                            </Link>
                        </NavItem>
                        <NavItem style={siteBarButton}>
                            <Link to="/Sign in">
                                <Button outline color="primary" size="sm">Sign in</Button>
                            </Link>
                        </NavItem>
                        <NavItem style={siteBarButton}>
                            <Link to="/research">
                                <Button color="primary" size="sm">Get Started</Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>;
    }
}

