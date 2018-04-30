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
import classnames from 'classnames';

const titleBlock = {
    background: '#FF9833',
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
    background: '#FF9833',
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
            <div>
                <div style={titleBlock}>
                    <p style={titleTag}>Races</p>
                </div>

                <Nav tabs style={tabsBlock}>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Marathon
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Swimrun
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '3'})}
                            onClick={() => {
                                this.toggle('3');
                            }}
                        >
                            Tri
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '4'})}
                            onClick={() => {
                                this.toggle('4');
                            }}
                        >
                            Ultra
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent  activeTab={this.state.activeTab} style={waddlContent}>
                    <TabPane tabId="1">
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
                    <TabPane tabId="3">
                        <br/>
                        <CardColumns>
                            <a>
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
                    <TabPane tabId="4">
                        <br/>
                        <CardColumns>
                            <a>
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
        );
    }
}