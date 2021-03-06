// Dependencies
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// Bootstrap
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    CardImg,
    Breadcrumb,
    BreadcrumbItem,
    Progress
} from 'reactstrap'

//Images
import locationPin from '../../../assets/images/location_pin.svg'
import datePin from '../../../assets/images/date_pin.svg'
import SwimPin from '../../../assets/images/swim_icon.svg'
import RidePin from '../../../assets/images/cycle_icon.svg'
import RunPin from '../../../assets/images/run_icon.svg'

// Components
import {
    Template,
    WaddlLabel,
    WaddlColumns,
    WaddlCardLink
} from '../../../components';

// Page
const TriPage = () => (
        <Template pageType="race">
            <Container>
                <Row>
                    <Col md="12">
                        <Breadcrumb style={breadCrumbBlock}>
                            <BreadcrumbItem><Link to="/races/">Races</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Tri</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row style={headerBlock}>
                    <Col md="12">
                        <Progress value={75}>It's a toughy!</Progress>
                    </Col>
                </Row>
                <Row>
                    <Col md="7">
                        <h2>Half Ironman Edinburgh</h2>
                        <div>
                            <p style={infoP}><img src={locationPin} style={headerIcon}/> Edinburgh </p>
                            <p style={infoP}><img src={datePin} style={headerIcon}/> 1st July </p>
                        </div>
                        <br/>
                    </Col>
                    <Col md="5">
                        <Button color="primary" style={buttonRight}> Book Race! </Button> {' '}
                        <Button outline color="primary" style={buttonRight}> Interested...</Button> {' '}
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <WaddlLabel id="goggles">The Race</WaddlLabel>
                        <div>
                            <p style={infoP}><img src={SwimPin} style={headerIcon}/> 1.9km </p>
                            <p style={infoP}><img src={RidePin} style={headerIcon}/> 90km </p>
                            <p style={infoP}><img src={RunPin} style={headerIcon}/> 21.1km </p>
                        </div>
                        <br />
                        <p>Summary of the race...</p>
                        <br/>
                    </Col>
                    <Col md="12">
                        <WaddlLabel id="goggles">Race Snaps</WaddlLabel>
                        <WaddlColumns>
                            <WaddlCardLink>
                                <Card>
                                    <CardImg top width="100%"
                                             src="https://res.cloudinary.com/waddl/image/upload/v1527847553/Screen_Shot_2018-06-01_at_11.02.43.png"
                                             alt="Tri"/>
                                </Card>
                            </WaddlCardLink>
                        </WaddlColumns>
                    </Col>
                    <Col md="12">
                        <br/>
                        <WaddlLabel id="goggles">The Route</WaddlLabel>
                        <p>Little Route Map</p>
                    </Col>
                    <Col md="12">
                        <br/>
                        <WaddlLabel id="goggles">Race Reviews</WaddlLabel>
                        <p>Race Reviews...</p>
                        <br/>
                    </Col>
                </Row>
            </Container>
        </Template>
    )
;

//Styled Components

const RaceHeroBlock = styled.div`
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(to bottom right, #F03F6D , #FCB405);
`;
// Inline Styles
const headerBlock = {
    padding: '15px 0'
};

const buttonRight = {
    float: 'right',
    marginLeft: '10px'
};

const headerIcon = {
    width: '14px',
    marginRight: '6px',
    marginTop: '-2px'
};

const breadCrumbBlock = {
    background: 'none',
    paddingBottom: '0'
};


const infoP = {
    display: 'inline',
    marginLeft: '10px'
};

export default TriPage
