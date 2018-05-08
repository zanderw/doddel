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
                    <p>Waddl was started by a couple of friends who enjoy sweating,
                        laughing over silly miles and nibbling a hearty flapjack along the way. They created waddl to
                        take the pain our of sourcing endurance resources, giving folks more time to push themselves
                        online than trawl outdated sites online. It began with gear and
                        has expanded into everything endurance, for everyone interested. </p>
                    <br/>
                    <h6>Global Community of Waddlers</h6>
                    <p>Since it started back in late 2017, Waddl is used in over 104 countries by thousands of Wadddlers
                        every single. It's totally free and anyone can add a handy resource.</p>
                </Col>

            </Row>
        </Container>
    </Template>
);

export default OurStoryPage
