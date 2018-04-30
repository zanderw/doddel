import React from 'react'
import Link from 'gatsby-link'

import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

const sideNav = {
    position: 'fixed',
    top: '56px',
    left: '0',
    width: '200px',
    bottom: '0',
    background: 'rgba(0,0,0, .05)',
    paddingTop: "15px"
};

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



export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={sideNav} >
            <p style={sideLabel}>POPULAR</p>
            <ListGroup>
                <ListGroupItem style={sideItem} tag="a" href="/gear">Gear</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/nutrition">Nutrition</ListGroupItem>
                <ListGroupItem style={sideItem} tag="a" href="/races">Races</ListGroupItem>
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
                <ListGroupItem style={sideItem} tag="a" href="/entertainment">Entertainment</ListGroupItem>
            </ListGroup>
            <hr />
        </div>;
    }
}

