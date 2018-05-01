import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import waddlStar from '../assets/images/waddl_star.svg'
import eediPlaceholder from '../assets/images/placeholder_image.svg'
import eediFooterPush from '../assets/images/footer_push.svg'

import {
    Container,
    Row,
    Col,
    Button,
    Badge,
} from 'reactstrap'

const headerBlock = {
    textAlign: 'center',
    margin: '0 auto',
    padding: '10px 0'
};

const imageIcon = {
    width: '13px',
    marginRight: '13px'
};

const secondaryButtonBlock = {
    background: 'rgba(0,0,0, .05)',
    borderRadius: '6px',
    padding: '5px 12px',
    width: 'max-content',
    textAlign: 'center',
    fontSize: '13px',
    color: '#333',
    margin: '0 auto'
};

const secondaryButton = {
    fontSize: '13px',
    borderBottom: '2px solid rgba(51,51,51, .5)',
    padding: '2px 0',
    borderRadius: '0',
    color: '#333',
    fontWeight: '500'
};

const heroBlock = {
    padding: "2em 2em"
};

const centerBlock = {
    textAlign: "center",
    margin: "0 auto"
};

const selectBlock = {
    height: "90px",
    width: "90px",
    borderRadius: "10px",
    margin: "0 auto",
    background: "#FFC20D"
};


const IndexPage = () => (
    <div>
        <div style={headerBlock}>
        <div style={secondaryButtonBlock}>
            <img src={waddlStar} style={imageIcon}/>
            Run? Cycle? Swim? {' '}
            <Button color="link" style={secondaryButton}>Join our awesome community! </Button>
        </div>
        </div>
        <Row style={heroBlock}>
            <Col xs="12">
                <h6>Endurance Resources <Badge color="success">FREE</Badge></h6>
            </Col>
            <br />
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Gear</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Nutrition</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Races</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Races</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Races</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Races</p>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row style={heroBlock}>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Gear</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Nutrition</p>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link >
                        <div style={selectBlock}>
                        </div>
                        <p>Races</p>
                    </Link>
                </div>
            </Col>
        </Row>
    </div>
)


export default IndexPage
