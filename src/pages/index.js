import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import eediHeroImage from '../assets/images/hero_landing.svg'
import eediPlaceholder from '../assets/images/placeholder_image.svg'
import eediFooterPush from '../assets/images/footer_push.svg'

import {
    Container,
    Row,
    Col,
} from 'reactstrap'

const heroBlock = {
    padding: "2em 0"
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
    <Container>
        <Row>
            <Col xs="12" md="12" lg="12">
                <h4>Endurance Resources</h4>
                <p>A curation of endurance resources gifted to you by the most generous community of 1000's of
                    amatuers</p>
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
    </Container>
)


export default IndexPage
