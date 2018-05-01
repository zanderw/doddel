import React from 'react'
import Link from 'gatsby-link'
import {
    Row,
    Col,
    Button
} from 'reactstrap';

const footerBlock = {
    padding: '3em 2em',
    background: 'rgba(255,255,255)',
    borderTop: '1px solid rgba(55,55,55, .08)'
};

const Footer = ({ siteTitle }) => (
    <Row style={footerBlock}>
        <Col xs="12" md="3" lg="3">
            <p>Eedi</p>
        </Col>
        <Col xs="12" md="3" lg="3">
            <p>Eedi</p>
            <Link>
                <Button color="link"> Get Started</Button>
            </Link>
            <ul>
                <li>
                    <Link to="/our-story"> Our Story </Link>
                </li>
                <li>
                    <Link to="/research"> Research </Link>
                </li>
                <li>
                    <Link to="/careers"> Careers </Link>
                </li>
            </ul>
        </Col>
        <Col xs="12" md="3" lg="3">
            <p>Useful</p>
            <ul>
                <li>
                    <Link> Blog</Link>
                </li>
                <li>
                    <Link> Terms of Service </Link>
                </li>
                <li>
                    <Link> Privacy </Link>
                </li>
            </ul>
        </Col>
        <Col xs="12" md="3" lg="3">
            <p>Get in Touch</p>
            <ul>
                <li>
                    <Link> Twitter</Link>
                </li>
                <li>
                    <Link> hello@eedi.co.uk</Link>
                </li>
            </ul>
        </Col>
    </Row>
)

export default Footer
