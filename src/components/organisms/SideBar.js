import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import media from "../media";


import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';


const sideLabel = {
    fontSize: "11px",
    fontWeight: "400px",
    padding: "5px",
    paddingLeft: "15px",
    margin: "0"
};

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



export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        const pageType = props.pageType;
    }
    render() {
        return <SideNav>
            <p style={sideLabel}>POPULAR</p>
            <ListGroup>
                <ListGroupItem tag="a" href="/gear" style={this.props.pageType === 'gear' ? sideItemActive : sideItem}>Gear</ListGroupItem>
                <ListGroupItem tag="a" href="/nutrition" style={this.props.pageType === 'nutrition' ? sideItemActive : sideItem} >Nutrition</ListGroupItem>
                <ListGroupItem tag="a" href="/races" style={this.props.pageType === 'races' ? sideItemActive : sideItem}>Races</ListGroupItem>
            </ListGroup>
            <hr />
            <p style={sideLabel}>LEARNING</p>
            <ListGroup>
                <ListGroupItem style={sideItem} tag="a" href="/articles">Articles</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/blogs">Blogs</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/books">Books</ListGroupItem>
            </ListGroup>
            <hr />
            <p style={sideLabel}>USEUFL</p>
            <ListGroup>
                <ListGroupItem style={sideItem} tag="a" href="/apps">Apps</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/communities">Communities</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/podcasts">Podcasts</ListGroupItem>
            </ListGroup>
            <hr />
        </SideNav>;
    }
}


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

