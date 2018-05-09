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
    CardText,
    Tooltip
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlLabel,
    WaddlCardLink
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
                            <Badge href="#bicycles" color="secondary"> Bicycles</Badge> {''}
                            <Badge href="#cleats" color="secondary">Cleats</Badge> {''}
                            <Badge href="#jerseys" color="secondary"> Jerseys</Badge> {''}
                            <Badge href="#helmets" color="secondary"> Helmets</Badge> {''}
                            <Badge href="#cycleShorts" color="secondary">Shorts</Badge> {''}
                            <Badge href="#cycleSocks" color="secondary">Socks</Badge> {''}
                            <Badge href="#cycleEquipment" color="secondary">Equipment</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="bicycles">Bicycles</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="cleats">Cleats</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="jerseys">Jerseys</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="helmets">Helmets</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="cycleShorts">Socks</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="cycleSocks">Socks</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="cycleEquipment">Equipment</WaddlLabel>
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
                        <TabPane tabId="2">
                            <br/>
                            <Badge href="#trainers" color="secondary"> Trainers</Badge> {''}
                            <Badge href="#tShirts" color="secondary">T-shirts</Badge> {''}
                            <Badge href="#tops" color="secondary"> Tops</Badge> {''}
                            <Badge href="#shorts" color="secondary"> Shorts</Badge> {''}
                            <Badge href="#skins" color="secondary">Skins</Badge> {''}
                            <Badge href="#socks" color="secondary">Socks</Badge> {''}
                            <Badge href="#accessories" color="secondary"> Accessories</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="trainers">Road Trainers</WaddlLabel>
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
                            <br/>
                            <WaddlLabel>Trail Trainers</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="tShirts">T-shirts</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="tops">Tops (Summer)</WaddlLabel>
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
                            <br/>
                            <WaddlLabel>Tops (Winter)</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="shorts">Shorts</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="skins">Skins</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="socks">Socks</WaddlLabel>
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
                            <br/>
                            <WaddlLabel id="accessories">Accessories</WaddlLabel>
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
                            <Badge href="#goggles" color="secondary"> Goggles</Badge> {''}
                            <Badge href="#swimwear" color="secondary"> Swimwear</Badge> {''}
                            <Badge href="#swimcap" color="secondary"> Swimcap</Badge> {''}
                            <Badge href="#westuit" color="secondary"> Wetsuit</Badge> {''}
                            <Badge href="#equipment" color="secondary"> Equipment</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="goggles">Goggles</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink target="_blank"
                                               href="https://www.amazon.co.uk/gp/product/B01BH997S8/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B01BH997S8&linkCode=as2&tag=waddl-21&linkId=32990c163d4c29796a065441942b9f1b">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525711959/waddl_goggles.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>2XU Rival Smoke</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://www.amazon.co.uk/gp/product/B01BH9972O/ref=as_li_tl?ie=UTF8&tag=waddl-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=B01BH9972O&linkId=a331312e5cda6995cc6af7af92768a34">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525712114/waddl_goggles_02.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>2XU Solace</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="swimwear">Swimwear (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
                            <br/>
                            <WaddlLabel>Swimwear (F)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
                            <br/>
                            <WaddlLabel id="swimcap">Swimcap</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
                            <br/>
                            <WaddlLabel id="wetsuit">Wetsuit (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
                            <br/>
                            <WaddlLabel>Wetsuit (F)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
                            <WaddlLabel id="equipment">Training Equipment</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
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
const tabsBlock = {
    background: '#FA4DAA',
    paddingLeft: '15px',
    marginTop: '-1px'
};

const waddlContent = {
    paddingLeft: '15px',
    paddingRight: '15px'
};
