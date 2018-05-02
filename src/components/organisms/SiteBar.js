import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import waddlLogo from '../../assets/images/waddl_logo.svg'

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button
} from 'reactstrap';


const logo = {
    width: '60px',
    height: 'auto'
};


const dropdownSecondary = {
    backgroundColor: '#fff',
    borderRadius: '0',
    border: 'none',
    color: 'rgba(51,51,51, 0.5)',
    fontSize: '13px',
};

const dropdownItem = {
    color: 'rgb(51,51,51)',
    fontSize: '13px',
};

const floatRight = {
    float: 'right',
    marginLeft: '15px'
};

export default class ReactNavbar extends React.Component {
    constructor(props) {
        super(props);

        const pageType = props.pageType;
        this.state = {
            fixed: true
        };

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));

    }


    render() {
        return <div>
            <SiteBar color="light" light expand="xs">
                <Link to="/">
                    <img style={logo} src={waddlLogo}/> {' '}
                </Link>
                <Link style={floatRight} to="/research">
                    <Button color="primary" size="sm">Share with friends</Button>
                </Link>
                <Dropdown style={floatRight} group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                    <DropdownToggle style={dropdownSecondary} caret>
                        Help
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem style={dropdownItem} href='/get-in-touch'> Get in touch </DropdownItem>
                        <DropdownItem style={dropdownItem} href='/our-story'>Our Story</DropdownItem>
                        <DropdownItem style={dropdownItem} href='/whats-new'>What's New</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </SiteBar>
        </div>;
    }
}

const SiteBar = styled.div `
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid rgba(51,51,51, .05);
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 0px 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

