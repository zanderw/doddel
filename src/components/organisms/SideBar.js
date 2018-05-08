// Dependencies
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from "../media";

// Bootstrap
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';


// Component
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        const pageType = props.pageType;
    }

    render() {
        return <SideNav>
            <SideLabel>POPULAR</SideLabel>
            <ListGroup>
                <Link to='/gear/'>
                    <ListGroupItem
                        style={this.props.pageType === 'gear' ? sideItemActive : sideItem}>Gear</ListGroupItem>
                </Link>
                <Link to='/nutrition/'>
                    <ListGroupItem
                        style={this.props.pageType === 'nutrition' ? sideItemActive : sideItem}>Nutrition</ListGroupItem>
                </Link>
                <Link to='/races/'>
                    <ListGroupItem
                        style={this.props.pageType === 'races' ? sideItemActive : sideItem}>Races</ListGroupItem>
                </Link>
            </ListGroup>
            <hr/>
            <SideLabel>LEARNING</SideLabel>
            <ListGroup>
                <Link to='/articles/'>
                    <ListGroupItem style={this.props.pageType === 'articles' ? sideItemActive : sideItem}>Articles</ListGroupItem>
                </Link>
                <Link to='/blogs/'>
                    <ListGroupItem style={this.props.pageType === 'blogs' ? sideItemActive : sideItem}>Blogs</ListGroupItem>
                </Link>
                <Link to='/books/'>
                    <ListGroupItem style={this.props.pageType === 'books' ? sideItemActive : sideItem}>Books</ListGroupItem>
                </Link>
            </ListGroup>
            <hr/>
            <SideLabel>USEUFL</SideLabel>
            <ListGroup>
                <Link to='/apps/'>
                    <ListGroupItem style={this.props.pageType === 'apps' ? sideItemActive : sideItem}>Apps</ListGroupItem>
                </Link>
                <Link to='/communities/'>
                    <ListGroupItem style={this.props.pageType === 'communities' ? sideItemActive : sideItem} >Communities</ListGroupItem>
                </Link>
                <Link to='/podcasts/'>
                <ListGroupItem style={this.props.pageType === 'podcasts' ? sideItemActive : sideItem}>Podcasts</ListGroupItem>
                </Link>
            </ListGroup>
            <hr/>
        </SideNav>;
    }
}

//Styled Components
const SideNav = styled.div `
    position: fixed;
    top: 54px;
    left: 0;
    width: 200px;
    bottom: 0;
    background: rgba(0,0,0, .05);
    padding-top: 15px;
    
    ${media.tablet`
       display: none;
    `};
`;

const SideLabel = styled.p`
    font-size: 11px;
    font-weight: 400px;
    padding: 5px;
    padding-left: 15px;
    margin: 0 auto;
    color: rgba(31,31,31,.5);
`;

// Inline Styles
const sideItem = {
    fontWeight: "500px",
    border: "none",
    background: "none",
    fontSize: "14px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "20px",
    color: '#333',
};

const sideItemActive = {
    fontWeight: "500px",
    border: "none",
    background: "none",
    fontSize: "14px",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "20px",

};

