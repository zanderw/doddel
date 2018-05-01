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
    padding: '15px 0'
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



const IndexPage = () => (
    <Container>
        <Row style={headerBlock}>
            <Col sm="12" md={{size: 8, offset: 2}}>
                <div style={secondaryButtonBlock}>
                    <img src={waddlStar} style={imageIcon}/>
                    Run? Cycle? Swim? {' '}
                    <SecondaryBlockButton>Join our awesome community! </SecondaryBlockButton>
                </div>
            </Col>
        </Row>
        <Row style={heroBlock}>
            <Col xs="12">
                <h6>Endurance Resources <Badge color="secondary">FREE</Badge></h6>
            </Col>
            <br/>
            <br/>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <GearSelectBlock>
                        </GearSelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <NutritionSelectBlock>
                        </NutritionSelectBlock>
                        <SelectTag>Nutrition</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <RacesSelectBlock>
                        </RacesSelectBlock>
                        <SelectTag>Races</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <ArticlesSelectBlock>
                        </ArticlesSelectBlock>
                        <SelectTag>Races</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <BlogSelectBlock>
                        </BlogSelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <BookSelectBlock>
                        </BookSelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
        </Row>
        <Row style={heroBlock}>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <AppSelectBlock>
                        </AppSelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <CommunitySelectBlock>
                        </CommunitySelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <EntertainmentSelectBlock>
                        </EntertainmentSelectBlock>
                        <SelectTag>Gear</SelectTag>
                    </Link>
                </div>
            </Col>
            <Col xs="6" md="2" lg="2">
                <div style={centerBlock}>
                    <Link>
                        <SelectBlock>
                        </SelectBlock>
                        <SecondaryBlockButton>+ Add </SecondaryBlockButton>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
)
;


const SelectBlock = styled.div`
    height: 90px;
    max-width: 90px;
    border-radius: 10px;
    margin: 0 auto;
    background: rgba(51,51,51, .08);
    :hover {
    opacity: 0.9;
    }
`;

const GearSelectBlock = SelectBlock.extend`
    background: rgb(250, 77, 170);
`;

const NutritionSelectBlock = SelectBlock.extend`
    background: #FFC20D;
`;

const RacesSelectBlock = SelectBlock.extend`
    background: rgb(255, 152, 51);
`;

const ArticlesSelectBlock = SelectBlock.extend`
    background: rgb(16, 204, 221);
`;

const BlogSelectBlock = SelectBlock.extend`
    background: rgb(13, 216, 120);
`;

const BookSelectBlock = SelectBlock.extend`
    background: rgb(68, 40, 242);
`;

const AppSelectBlock = SelectBlock.extend`
    background: rgb(255, 59, 59)
`;

const CommunitySelectBlock = SelectBlock.extend`
    background: rgb(45, 152, 201);
`;

const EntertainmentSelectBlock = SelectBlock.extend`
    background: rgb(136, 218, 12);
`;

const SelectTag = styled.h6 `
font-size: 13px;
color: #333;
font-weight: 400;
padding: 0.5em 0;
:hover {
    text - decoration: none;
}
`;

const SecondaryBlockButton = styled.button`
font-size: 13px;
border: none;
border-bottom: 2px solid rgba(51,51,51, .5);
padding: 2px 0;
border-radius: 0;
color: #333;
font-weight: 500;
background: none;
:hover {
    cursor: pointer;
    border-bottom: 2px solid rgb(51,51,51);
}
`;

export default IndexPage
