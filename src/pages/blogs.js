// Dependencies
import React from 'react';
import styled from 'styled-components'
import media from "../components/media";
import classnames from 'classnames';

// Bootstrap
import {
    TabContent,
    TabPane,
    Badge,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardImg,
    CardBody,
    CardText,
    Row,
    Col,
    Label
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlLabel,
} from '../components';

// Page
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
                    <PageHeaderBlock style={blogColor}>
                        <p>Blogs</p>
                    </PageHeaderBlock>

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
                            <Row>
                                <Col><WaddlLabel>Header</WaddlLabel></Col>
                            </Row>
                            <WaddlColumns>
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
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="2">
                            <br/>
                            <WaddlColumns>
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
                            </WaddlColumns>
                        </TabPane>
                    </TabContent>
                </div>
            </Template>
        );
    }
}

// Inline Styles
const blogColor = {
    background: '#0DD878',
};

const tabsBlock = {
    background: '#0DD878',
    paddingLeft: '15px',
    marginTop: '-1px'
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
