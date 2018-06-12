// Dependencies
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

// Bootstrap
import {
    Container,
    Row,
    Col,
    Alert,
    Badge,
    Button,
    Card,
    CardImg,
    CardBody,
    CardText
} from 'reactstrap'

//Images
import waddlStar from '../assets/images/waddl_star.svg'
import waddlHome from '../assets/images/waddl_home.svg'
import DoddelHeroImage from '../assets/images/doddel_hero.svg'

// Components
import {
    Template,
    WaddlColumns,
    WaddlCardLink,
    WaddlLabel
} from '../components';

// Page
const IndexPage = () => (
        <Template pageType="home">
            <Container>
                <Row style={headerBlock}>
                    <Col sm="12" md={{size: 8, offset: 2}}>
                        <Alert color="primary">
                            <img src={waddlStar} style={imageIcon}/> Run? Cycle? Swim? <a href="#" className="alert-link">Become a Doddeler!</a>
                        </Alert>
                    </Col>
                </Row>
                <Row style={heroBlock}>
                    <Col xs="12" sm="12" md="5">
                        <br/>
                        <br/>
                        <h3><strong>Find everything ENDURANCE in one super handy place</strong></h3>
                        <p>Gifted by the world's most generous community of amatuers who LOVE to sweat and HATE trawling through tonnes of different websites  <Badge
                            color="success">Doddelers!</Badge></p>
                        <span><i><strong>Trending right now:</strong></i></span>
                        <Link to="/gear">
                            <Button color="link" className="btn-link" size="md">Gear</Button>
                        </Link>
                        <Link to="/nutrition">
                            <Button color="link"  className="btn-link" size="md">Nutrition</Button>
                        </Link>
                        <Link to="/races">
                            <Button color="link" className="btn-link" size="md">Races</Button>
                        </Link>
                    </Col>
                    <Col xs="12" sm="12" md="7">
                        <img src={DoddelHeroImage} style={shareIcon}/>
                    </Col>
                </Row>
                <Row style={heroBlock}>
                    <Col xs="12">
                        <WaddlLabel id="goggles">Super handy endurance resources</WaddlLabel>
                        <br/>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/gear'>
                                <GearSelectBlock>
                                    <SelectBlockIcon
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525250876/waddl_hero_gear.svg'
                                        alt='gear-icon'/>
                                </GearSelectBlock>
                                <SelectTag>Gear</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/nutrition'>
                                <NutritionSelectBlock>
                                    <SelectBlockIcon
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525251996/waddl_hero_nutrition.svg'
                                        alt='nutrition-icon'/>
                                </NutritionSelectBlock>
                                <SelectTag>Nutrition</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/races'>
                                <RacesSelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525252135/waddl_hero_races.svg'
                                        alt='races-icon'/>
                                </RacesSelectBlock>
                                <SelectTag>Races</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/articles'>
                                <ArticlesSelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525252440/waddl_hero_articles.svg'
                                        alt='articles-icon'/>
                                </ArticlesSelectBlock>
                                <SelectTag>Articles</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/blogs'>
                                <BlogSelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525252816/waddl_hero_blog.svg'
                                        alt='blogs-icon'/>
                                </BlogSelectBlock>
                                <SelectTag>Blogs</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/books'>
                                <BookSelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525253326/waddl_hero_books.svg'
                                        alt='books-icon'/>
                                </BookSelectBlock>
                                <SelectTag>Books</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/apps'>
                                <AppSelectBlock>
                                    <SelectBlockIconRect
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525253473/waddl_hero_apps.svg'
                                        alt='apps-icon'/>
                                </AppSelectBlock>
                                <SelectTag>Apps</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/communities'>
                                <CommunitySelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525253712/waddl_hero_communities.svg'
                                        alt='community-icon'/>
                                </CommunitySelectBlock>
                                <SelectTag>Communities</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/podcasts'>
                                <PodcastSelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525253997/waddl_hero_podcast.svg'
                                        alt='podcast-icon'/>
                                </PodcastSelectBlock>
                                <SelectTag>Podcast</SelectTag>
                            </Link>
                        </div>
                    </Col>
                    <Col xs="6" md="2" lg="2">
                        <div style={centerBlock}>
                            <Link to='/'>
                                <SelectBlock>
                                    <SelectBlockIconSquare
                                        src='https://res.cloudinary.com/waddl/image/upload/v1525254234/waddl_hero_add.svg'
                                        alt='add-icon'/>
                                </SelectBlock>
                                <SecondaryBlockButton>+ Add </SecondaryBlockButton>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row style={heroBlock}>
                    <Col md="12">
                        <WaddlLabel id="goggles">Popular Resources</WaddlLabel>
                    </Col>
                    <WaddlColumns>
                        <WaddlCardLink target="_blank"
                                       href="https://amzn.to/2K4u60P">
                            <Card>
                                <CardImg top width="100%"
                                         src="https://res.cloudinary.com/waddl/image/upload/v1525711959/waddl_goggles.png"
                                         alt="Waddl Goggles"/>
                                <CardBody>
                                    <CardText>2XU Rival Smoke</CardText>
                                    <Badge color="secondary">Goggles</Badge>
                                </CardBody>
                            </Card>
                        </WaddlCardLink>
                    </WaddlColumns>
                </Row>
            </Container>
        </Template>
    )
;

//Styled Components
const SelectBlockIcon = styled.img`
    margin-top: 30px;
    width: 50px;
`;

const SelectBlockIconSquare = SelectBlockIcon.extend`
    margin-top: 25px;
    width: 40px;
`;

const SelectBlockIconRect = SelectBlockIcon.extend`
    margin-top: 25px;
    width: 36px;
`;

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
   background: rgb(44, 88, 255);
`;

const CommunitySelectBlock = SelectBlock.extend`
    background: rgb(255, 79, 79);
`;

const PodcastSelectBlock = SelectBlock.extend`
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

// Inline Styles
const headerBlock = {
    textAlign: 'center',
    margin: '0 auto',
    padding: '15px 0'
};

const imageIcon = {
    width: '13px',
    marginRight: '13px'
};

const heroBlock = {
    padding: "2em 2em"
};

const centerBlock = {
    textAlign: "center",
    margin: "0 auto",
    marginBottom: '30px',
};

const shareIcon = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    marginTop: '30px'
};

export default IndexPage
