// Dependencies
import React from 'react';
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
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlCardLink,
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
            <Template pageType="nutrition">
                <div>
                    <PageHeaderBlock style={nutritionColor}>
                        <p>Nutrition</p>
                        <a>+</a>
                    </PageHeaderBlock>
                    <Nav tabs style={tabsBlock}>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Gels
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Solids
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '3'})}
                                onClick={() => {
                                    this.toggle('3');
                                }}
                            >
                                Hydration
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} style={waddlContent}>
                        <TabPane tabId="1">
                            <br/>
                            <Badge href="#during" color="secondary"> During</Badge> {''}
                            <br/>
                            <br/>
                            <WaddlLabel id="before">During</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2JQvuV5" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_01.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>SIS Go Gels</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2tan2sI" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_02.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>High5 Gels</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2tcoYAO" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_03.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Huma PlusChia Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HRvJ0j" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_04.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>SIS Whey20 Protein Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HRxlqT" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_05.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>GU Energy Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2JReNsu" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_06.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Torq energy Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2t0wNu6" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_07.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Cliff Bar Energy Shot Bloks</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HRyuPd" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_08.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Cliff Bar Energy Shots</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2JQTdEK" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_09.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>33 Shake Energy Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ygTLlK" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529162802/gel_10.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Stealth Energy Gel</CardText>
                                            <Badge color="secondary">Gel</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br />
                            <br />
                        </TabPane>
                        <TabPane tabId="2">
                            <br />
                            <Badge href="#bar" color="secondary"> Bar</Badge> {''}
                            <Badge href="#meal" color="secondary"> Meal</Badge> {''}
                            <br/>
                            <br/>
                            <WaddlLabel id="bar">Bar</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2l9XaJE" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_01.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Clif Trail Bars</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2tcYLCj" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_02.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>PowerBar Energy Bar</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2MuuHL6" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_03.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>CNO Pro FlapJack</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HSjSyZ" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_04.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>SIS Energy Bars</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2taNani" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_05.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Sunwarrior Sol vegan Bars</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HSlxVg" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_06.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Canah Mixed Hemp Bar</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HToZ1V" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_07.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Trek Energy Bar</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ldL0jh" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_08.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Aduna Cacao Raw Energy</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HS3SNB" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_09.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Bounce Energy Ball</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2LU51Xj" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_10.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Matrix Flapjack</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2LS3GAo" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_11.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Boost Ball</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2HWx9Xy" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_12.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>PhD Smart Bar</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2yfcbU9" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1529164791/bar_13.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>PowerBar Energize Bar</CardText>
                                            <Badge color="secondary">Bar</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="during">Meal</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="3">
                            <br/>
                            <Badge href="#before" color="secondary"> Before</Badge> {''}
                            <Badge href="#during" color="secondary"> During</Badge> {''}
                            <Badge href="#after" color="secondary"> After</Badge> {''}
                            <br/>
                            <br/>
                            <WaddlLabel id="before">Before</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="during">During</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="after">After</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                    </TabContent>
                </div>
            </Template>
        );
    }
}

// Inline Styles
const nutritionColor = {
    background: '#FFC20D',
};

const tabsBlock = {
    background: '#FFC20D',
    paddingLeft: '15px',
    marginTop: '-1px'
};

const waddlContent = {
    paddingLeft: '15px',
    paddingRight: '15px'
};