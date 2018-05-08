// Dependencies
import React from 'react';
import classnames from 'classnames';

//Bootstrap
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
    CardText
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlLabel
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
            <Template pageType="gear">
                <div>
                    <PageHeaderBlock>
                        <p>Gear</p>
                    </PageHeaderBlock>
                    <Nav tabs style={tabsBlock}>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Cycling
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Running
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Swimming
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} style={waddlContent}>
                        <TabPane tabId="1">
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
                        <TabPane tabId="3">
                            <br/>
                            <WaddlLabel>Goggles</WaddlLabel>
                            <WaddlColumns>
                                <a>
                                    <Card style={waddlCard}>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525711959/waddl_goggles.png"
                                                 alt="Card image cap"/>
                                        <CardBody style={waddlCardBody}>
                                            <CardText style={waddlCardText}>2XU Rival Smoke</CardText>
                                            <Badge color="secondary" style={waddlCardBadge}>Goggles</Badge> {''} <Badge
                                            color="secondary" style={waddlCardBadge}>New</Badge>
                                        </CardBody>
                                    </Card>
                                </a>
                                <a>
                                    <Card style={waddlCard}>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525712114/waddl_goggles_02.png"
                                                 alt="Card image cap"/>
                                        <CardBody style={waddlCardBody}>
                                            <CardText style={waddlCardText}>2XU Solace</CardText>
                                            <Badge color="secondary" style={waddlCardBadge}>Goggles</Badge> {''} <Badge
                                            color="secondary" style={waddlCardBadge}>New</Badge>
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
const tabsBlock = {
    background: '#FA4DAA',
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
    display: 'inline-block',
    width: '100%'
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