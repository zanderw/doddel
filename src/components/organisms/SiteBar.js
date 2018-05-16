// Dependencies
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// Bootstrap
import {
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown,
    Button,
} from 'reactstrap';

//Images
import waddlLogo from '../../assets/images/waddl_logo.svg'

//  Components
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
                    <Logo src={waddlLogo}/>
                </Link>
                <Link style={floatRight} to="/share">
                    <Button color="primary" size="sm">Share with friends</Button>
                </Link>
                <Dropdown style={floatRight} group isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                    <DropdownToggle style={dropdownSecondary} caret>
                        Help
                    </DropdownToggle>
                    <DropdownMenu right>
                        <Link to='our-story'>
                            <DropdownItem style={dropdownItem}>Our Story</DropdownItem>
                        </Link>
                        <Link to='whats-new'>
                            <DropdownItem style={dropdownItem}>What's New</DropdownItem>
                        </Link>
                    </DropdownMenu>
                </Dropdown>
            </SiteBar>
        </div>;
    }
}

// Styled Components
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

 const Logo = styled.img`
   width: 75px;
   height: auto;
 `;

// Inline Styles
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

