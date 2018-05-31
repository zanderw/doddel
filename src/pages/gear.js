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
    Collapse,
    Button,
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
                            <Badge href="#bicycles" color="secondary"> Bikes</Badge> {''}
                            <Badge href="#wheels" color="secondary"> Wheels</Badge> {''}
                            <Badge href="#cleats" color="secondary">Cleats</Badge> {''}
                            <Badge href="#jerseys" color="secondary"> Jerseys</Badge> {''}
                            <Badge href="#helmets" color="secondary"> Helmets</Badge> {''}
                            <Badge href="#cycleShorts" color="secondary">Shorts</Badge> {''}
                            <Badge href="#cycleSocks" color="secondary">Socks</Badge> {''}
                            <Badge href="#cycleEquipment" color="secondary">Equipment</Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="bicycles">Road Bikes</WaddlLabel>
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
                            <WaddlLabel>TT Bikes</WaddlLabel>
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
                            <WaddlLabel>Tri Bikes</WaddlLabel>
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
                            <WaddlLabel id="wheels">Wheels</WaddlLabel>
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
                            <Badge href="#goggles" color="secondary"> Goggles (18)</Badge> {''}
                            <Badge href="#swimwear" color="secondary"> Swimwear (27) </Badge> {''}
                            <Badge href="#swimcap" color="secondary"> Swimcap (8)</Badge> {''}
                            <Badge href="#wetsuit" color="secondary"> Wetsuit (28)</Badge> {''}
                            <Badge href="#equipment" color="secondary"> Equipment (8) </Badge>
                            <br/>
                            <br/>
                            <WaddlLabel id="goggles">Goggles</WaddlLabel>
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
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FYgRwc">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525712114/waddl_goggles_02.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>2XU Solace</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FXnXB7">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892780/goggles_03.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>2XU Stealth</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2KLzWVY">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892853/waddl_goggles_04.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Adidas Peristar Fitswim</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2G1Dxvp">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892932/waddl_goggles_05.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Vista Swimming Mask</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2K6EFAm">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525892973/waddl_goggles_06.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Kayenne </CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I46nRW">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893121/waddl_goggles_07.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Arena 74 Tracks</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rxcR0j">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893212/waddl_goggles_08.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Arena Cobra Ultra Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2G0TVfR">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893399/waddl_goggles_09.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Maru Sonic Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2FZx6Jp">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893476/waddl_goggles_10.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>MP Michael Phelps XCEED</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I2Dndk">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893548/waddl_goggles_11.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Nike Swim Performance Remora</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IqBSFa">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893683/waddl_goggles_12.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Aquapulse Max 2 Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2I6WMFD">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893837/waddl_goggles_13.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Fastskin Speedsocket 2 Mirror</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rtOGAY">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525893943/waddl_goggles_14.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Futura Biofuse</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IabA6K">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894067/waddl_goggles_15.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Speedo Speedsocket Mirror Goggles</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IuyAR2">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894362/waddl_goggles_16.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Flex 2.0 Polarised</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2IugJdc">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894475/waddl_goggles_17.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Flex 2.0 Titanium</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink target="_blank"
                                               href="https://amzn.to/2rvgDr6">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525894590/waddl_goggles_18.png"
                                                 alt="Waddl Goggles"/>
                                        <CardBody>
                                            <CardText>Zoggs Predator Polarised Swimming Goggles</CardText>
                                            <Badge color="secondary">Goggles</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="swimwear">Swimwear (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2rybUoy" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525941979/waddl_swimwear_m_01.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Adidas Training</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Ka2Tts" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942076/waddl_swimwear_m_02.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Men's Solid Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KRqvUP" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942130/waddl_swimwear_m_03.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Men's Xpivot</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2wvlMoZ" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942185/waddl_swimwear_m_04.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Powerskin</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2rycIK6" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942272/waddl_swimwear_m_05.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Powerskin R-Evo</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IdDDSR" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942321/waddl_swimwear_m_06.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>MP Aquasphere Xpresso Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ItSKLa" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942367/waddl_swimwear_m_07.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Orca Men's Swimming Brief</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IqJpDJ" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942429/waddl_swimwear_m_08.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Men's Boom Splice Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Iw0Frl" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942522/waddl_swimwear_m_09.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Men's Endurance+ Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2rxdCXq" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942631/waddl_swimwear_m_10.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Men's Placement Panel Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KOBS05" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942772/waddl_swimwear_m_11.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Zoggs Men's Soul Jett Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Iq5PVT" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942874/waddl_swimwear_m_12.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Zoggs Men's Blow Out Jett Jammer</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Swimwear (W)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2KcGvQv" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525942960/waddl_swimwear_w_01.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Adidas Women Performance Swimwear</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KRxX2s" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958202/waddl_swimwear_w_02.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Adidas Women Infinetix</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2I2qPlY" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958262/waddl_swimwear_w_03.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Women Lite</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2G3ipoD" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958303/waddl_swimwear_w_04.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Women Athletes Training Swimsuit</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IdOsEs" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958349/waddl_swimwear_w_05.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Women Polycarbonite II</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2I60Ava" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958414/waddl_swimwear_w_06.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Arena Women Spider Booster</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2G2nldz" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958592/waddl_swimwear_w_07.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Nike Women Swimcore Solid</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2I5GNf5" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958642/waddl_swimwear_w_09.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Ignitor Placement Powerback</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2G6w8v6" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958692/waddl_swimwear_w_10.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Women Boom Allover Muscleback</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2G1ocuN" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958747/waddl_swimwear_w_11.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Women Boom Splice</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2I4waJM" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958798/waddl_swimwear_w_12.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Women Solar Fizz</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KRzc1C" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525958901/waddl_swimwear_w_13.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>Speedo Women Ultra Fizz</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KNEXgC" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525959051/waddl_swimwear_w_14.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>TYR Women Oceania Trinityfit</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2I7W0bK" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525959226/waddl_swimwear_w_15.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>TYR Women Glisade Diamondfit</CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1525959707/waddl_swimwear_w_08.png"
                                                 alt="Waddl Swimwear"/>
                                        <CardBody>
                                            <CardText>TYR Women Vitrum Diamond Cut </CardText>
                                            <Badge color="secondary">Swimwear</Badge> {' '} <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="swimcap">Swimcap</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2kcMdqh" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461221/waddl_swimcap_01.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>2XU Mens Neoprene Swim Cap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ITgqc9" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461221/waddl_swimcap_02.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Aqua Hoody</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IEnNVl" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461222/waddl_swimcap_04.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Blueseventy mens skull jammer</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2s2BHFC" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461221/waddl_swimcap_05.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>NCW Cornwall Open Water Swim Cap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IDUqyD" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461221/waddl_swimcap_06.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Orca Thermal Neoprene Swimcap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2khtcTz" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461222/waddl_swimcap_07.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>TYR Thermal Swimcap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2x1V1Zl" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461626/waddl_swimcap_10.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Zone 3 Neoprene Swim Cap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2khtFFj" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461222/waddl_swimcap_08.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Zone 3 Neoprene Strapless Swim Cap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Izz7SJ" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526461626/waddl_swimcap_09.png"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Zoggs Silicone Swimcap</CardText>
                                            <Badge color="secondary">Swimcap</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel id="wetsuit">Wetsuit (M)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2IDySCb" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575627/waddl_wetsuit_01.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>2XU A:1 Active</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ICPBtm" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575627/waddl_wetsuit_02.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>2XU P:2 Propel</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2GGSnrO" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_03.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>2XU Propel Pro</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IZsRDg" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_04.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Racer</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2LhQxRu" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575627/waddl_wetsuit_05.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Blueseventy Fusion Wetsuit</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IWRtwb" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575627/waddl_wetsuit_06.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Blueseventy Helix Swimskin</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IXPNm5" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575627/waddl_wetsuit_07.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Head Black Marlin</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KKasHw" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_09.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Huub Aerious II 3.5</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2x0yM68" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_09.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Huub Archimedes III 3:5</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IzovTL" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_10.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Orca Open Water</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2ICEVqF" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_11.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Orca S6</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2kbV6k1" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_12.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Sailfish Attack</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Lj8T4F" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_15.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Sailfish Ultimate IPS</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2KJ8VSg" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526575628/waddl_wetsuit_16.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Zone 3 Aspire</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Mens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <br/>
                            <WaddlLabel>Wetsuit (F)</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://amzn.to/2IxcWMS" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931944/waddl_wetsuit_w_01.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>2XU P:1 Propel</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IVgaJA" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_02.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Challenger </CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2J0rg04" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_03.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Aqua Sphere Pursuit</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2LjwbaK" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_04.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Blueseventy Helix</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2rYwtvp" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_05.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Head Black Marlin </CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2kfeVqP" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_06.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Huub Aegus II</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IAPM8B" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_07.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Huub Axiom</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Li9SlL" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_08.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Huub Womens Arara 3.5</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2IBIHEK" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_09.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Orca Open Water</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://amzn.to/2Izx6G9" target="_blank">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1526931945/waddl_wetsuit_w_10.png"
                                                 alt="doddel wetsuit"/>
                                        <CardBody>
                                            <CardText>Orca Predator</CardText>
                                            <Badge color="secondary">Wetsuit</Badge> {' '}
                                            <Badge color="secondary">Womens</Badge>
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
