import React from 'react';
import {
    TabContent,
    TabPane,
    Badge,
    Nav,
    NavItem,
    NavLink,
    CardColumns,
    Card,
    CardImg,
    CardBody,
    CardSubtitle,
    Button,
    CardTitle,
    CardText,
    Row,
    Col
} from 'reactstrap';
import styled from 'styled-components'
import media from "../components/media";
import classnames from 'classnames';

import { Template } from '../components';


const titleBlock = {
    background: '#0DD878',
    marginLeft: '0',
    marginRight: '0',
    textAlign: 'center',
    paddingTop: '15px',
    paddingBottom: '15px'
};

const titleTag = {
    color: '#fff',
    marginBottom: '0'
};

const tabsBlock = {
    background: '#0DD878',
    paddingLeft: '15px'
};

const waddlContent = {
    paddingLeft: '15px',
    paddingRight: '15px'
};

const waddlCardLink = {
    display: 'block',
};

const waddlCard = {
    border: 'none',
    display: 'inline-block', // Don't let them vertically span multiple columns
    width: '100%' // Don't let their width change
};

const waddlCardBody = {
    padding: '10px 0'
};

const waddlCardText = {
    fontSize: '12px',
    paddingBottom: '5px',
    marginBottom: '0'
};

const waddlCardBadge = {
    fontSize: '12px',
    fontWeight: '300',
};


export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <Template pageType="home">
                <div>
                    <div style={titleBlock}>
                        <p style={titleTag}>Blogs</p>
                    </div>

                    <Nav tabs style={tabsBlock}>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Training
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Food
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} style={waddlContent}>
                        <TabPane tabId="1">
                            <br/>
                            <BlogColumns>
                                <a href="/" style={waddlCardLink}>
                                    <Card style={waddlCard}>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525338613/Screen_Shot_2018-05-03_at_10.09.51.png"
                                                 alt="Card image cap"/>
                                        <CardBody style={waddlCardBody}>
                                            <CardText style={waddlCardText}>Name</CardText>
                                            <Badge color="secondary" style={waddlCardBadge}>New</Badge> {''} <Badge
                                            color="secondary" style={waddlCardBadge}>$</Badge>
                                        </CardBody>
                                    </Card>
                                </a>
                                <a href="/" style={waddlCardLink}>
                                    <Card style={waddlCard}>
                                        <CardImg top width="100%"
                                                 src="http://res.cloudinary.com/waddl/image/upload/q_80/v1525337748/Screen_Shot_2018-05-03_at_09.54.12.png"
                                                 alt="Card image cap"/>
                                        <CardBody style={waddlCardBody}>
                                            <CardText style={waddlCardText}>Name</CardText>
                                            <Badge color="secondary" style={waddlCardBadge}>New</Badge> {''} <Badge
                                            color="secondary" style={waddlCardBadge}>$</Badge>
                                        </CardBody>
                                    </Card>
                                </a>
                            </BlogColumns>
                        </TabPane>
                        <TabPane tabId="2">
                            <br/>
                            <CardColumns>
                                <a href="/" style={waddlCardLink}>
                                    <Card style={waddlCard}>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody style={waddlCardBody}>
                                            <CardText style={waddlCardText}>Name</CardText>
                                            <Badge color="secondary" style={waddlCardBadge}>New</Badge> {''} <Badge
                                            color="secondary" style={waddlCardBadge}>$</Badge>
                                        </CardBody>
                                    </Card>
                                </a>
                            </CardColumns>
                        </TabPane>
                    </TabContent>
                </div>
            </Template>
        );
    }
}

const BlogColumns = styled.div`
    column-count: 6;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1;
    
      ${media.laptop`
        column-count: 4;
    `};
    
     ${media.tablet`
        column-count: 3;
    `};
    
     ${media.phablet`
        column-count: 2;
    `};
    
`;