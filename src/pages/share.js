import React from 'react'

import waddlShare from '../assets/images/waddl_share.svg'


import {
    Container,
    Row,
    Col,
    Alert,
} from 'reactstrap';

import {Template} from '../components';

const heroBlock = {
    padding: '5em 0.5em'
};

const shareIcon = {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto'
};


const SharePage = () => (
    <Template pageType="share">
        <Container>
            <Row style={heroBlock}>
                <Col sm="12" md={{size: 6, offset: 3}}>
                    <h1>Share with Friends</h1>
                    <p>If you found Waddl useful we'd be grateful if you shared it with friends...it may get them to Kona! </p>
                    <Alert color="primary">
                        http://www.waddl.co
                    </Alert>
                    <br />
                    <img src={waddlShare} style={shareIcon}/>
                </Col>
            </Row>

        </Container>
    </Template>
);

export default SharePage
