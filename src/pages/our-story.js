import React from 'react'

import {
    Container,
    Row,
    Col,
} from 'reactstrap';

import {Template} from '../components';

const heroBlock = {
    padding: '5em 0.5em'
};


const OurStoryPage = () => (
    <Template pageType="story">
        <Container>
            <Row style={heroBlock}>
                <Col sm="12" md={{size: 6, offset: 3}}>
                    <h1>Our Story</h1>
                    <p>Written here...</p>
                </Col>
            </Row>
        </Container>
    </Template>
);

export default OurStoryPage
