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
} from 'reactstrap';

// Components
import {
    Template,
    PageHeaderBlock,
    WaddlColumns,
    WaddlCardLink,
    WaddlLabel
} from '../components';

// Pages
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
            <Template pageType="races">
                <div>
                    <PageHeaderBlock style={raceColor}>
                        <p>Races</p>
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
                                Marathon
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
                    <TabContent activeTab={this.state.activeTab} style={waddlContent}>
                        <TabPane tabId="1">
                            <br/>
                            <WaddlColumns>
                                <WaddlCardLink href="/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge> {''} <Badge
                                            color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="2">
                            <br/>
                            <Badge href="#july" color="secondary"> July</Badge> {''}
                            <Badge href="#august" color="secondary"> August </Badge> {''}
                            <Badge href="#september" color="secondary"> September </Badge> {''}
                            <Badge href="#october" color="secondary"> October </Badge> {''}
                            <br/>
                            <br/>
                            <WaddlLabel id="july">July</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857503/Screen_Shot_2018-06-01_at_13.50.59.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Summer Plod Marathon</strong></CardText>
                                            <CardText>1st July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857740/Screen_Shot_2018-06-01_at_13.55.10.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Northumberland Coastal Marathon</strong></CardText>
                                            <CardText>1st July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857660/Screen_Shot_2018-06-01_at_13.53.52.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Halifax Marathon</strong></CardText>
                                            <CardText>1st July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857158/Screen_Shot_2018-06-01_at_13.45.15.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>North Downs Way Marathon</strong></CardText>
                                            <CardText>8th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857374/Screen_Shot_2018-06-01_at_13.48.18.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Great Barrow Challenge</strong></CardText>
                                            <CardText>7th July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857243/Screen_Shot_2018-06-01_at_13.46.51.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Vivobarefoot Wales Marathon</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527857925/Screen_Shot_2018-06-01_at_13.58.19.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Maverick Inov-8 Series Peak District</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527858063/Screen_Shot_2018-06-01_at_14.00.01.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Scafell Pike Marathon</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527858063/Screen_Shot_2018-06-01_at_14.00.01.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Duncombe Park Running Festival</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527858365/Screen_Shot_2018-06-01_at_14.05.29.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>SCOTT Snowdonia Trail Marathon</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="august">August</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864504/Screen_Shot_2018-06-01_at_15.48.01.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Phoenix Summer Marathon</strong></CardText>
                                            <CardText>4th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864215/Screen_Shot_2018-06-01_at_15.42.46.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Gloucester Marathon</strong></CardText>
                                            <CardText>5th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864302/Screen_Shot_2018-06-01_at_15.44.34.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Thames Meander Marathon</strong></CardText>
                                            <CardText>11th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864381/Screen_Shot_2018-06-01_at_15.45.55.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Owler Marathon</strong></CardText>
                                            <CardText>12th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864616/Screen_Shot_2018-06-01_at_15.49.49.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Vanguard Way Marathon</strong></CardText>
                                            <CardText>5th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864716/Screen_Shot_2018-06-01_at_15.51.25.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Isle of Man Marathon</strong></CardText>
                                            <CardText>12th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527864842/Screen_Shot_2018-06-01_at_15.53.31.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Bath Two Tunnels Railway Races</strong></CardText>
                                            <CardText>19th August</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="september">September</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865806/Screen_Shot_2018-06-01_at_16.09.23.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Surrey Bacchus Marathon</strong></CardText>
                                            <CardText>9th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865295/Screen_Shot_2018-06-01_at_16.01.12.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Running Grandprix Goodwood Motor Circuit</strong></CardText>
                                            <CardText>16th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865422/Screen_Shot_2018-06-01_at_16.03.20.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Richmond Marathon</strong></CardText>
                                            <CardText>16th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865550/Screen_Shot_2018-06-01_at_16.05.23.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Loch Ness Marathon</strong></CardText>
                                            <CardText>23rd September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865683/Screen_Shot_2018-06-01_at_16.07.37.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Glencoe Marathon</strong></CardText>
                                            <CardText>30th September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527865925/Screen_Shot_2018-06-01_at_16.11.40.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>New Forest Marathon</strong></CardText>
                                            <CardText>9th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866083/Screen_Shot_2018-06-01_at_16.14.21.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Lancaster Marathon</strong></CardText>
                                            <CardText>16th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866198/Screen_Shot_2018-06-01_at_16.16.02.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Wimbledon Marathon</strong></CardText>
                                            <CardText>22nd September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866325/Screen_Shot_2018-06-01_at_16.18.11.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Causeway Coast Marathon</strong></CardText>
                                            <CardText>22nd September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866558/Screen_Shot_2018-06-01_at_16.21.26.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Monster Marathon</strong></CardText>
                                            <CardText>30th September</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="october">October</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867367/Screen_Shot_2018-06-01_at_16.35.39.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Atlantic Coast Challenge</strong></CardText>
                                            <CardText>5th - 7th October</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866865/Screen_Shot_2018-06-01_at_16.26.48.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Bournemouth Marathon</strong></CardText>
                                            <CardText>7th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866948/Screen_Shot_2018-06-01_at_16.28.35.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Windsor Marathon</strong></CardText>
                                            <CardText>7th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867132/Screen_Shot_2018-06-01_at_16.31.43.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Running Grand Prix Bedford</strong></CardText>
                                            <CardText>7th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867486/Screen_Shot_2018-06-01_at_16.37.42.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Chester Marathon</strong></CardText>
                                            <CardText>7th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867626/Screen_Shot_2018-06-01_at_16.40.01.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Clarendon Marathon</strong></CardText>
                                            <CardText>7th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867257/Screen_Shot_2018-06-01_at_16.33.54.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Yorkshire Marathon</strong></CardText>
                                            <CardText>14th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527867815/Screen_Shot_2018-06-01_at_16.43.13.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Eden Marathon</strong></CardText>
                                            <CardText>14th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527866325/Screen_Shot_2018-06-01_at_16.18.11.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Great Langdale Marathon</strong></CardText>
                                            <CardText>20th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527868037/Screen_Shot_2018-06-01_at_16.46.39.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Dramathon</strong></CardText>
                                            <CardText>20th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527868188/Screen_Shot_2018-06-01_at_16.49.09.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Chelmsford Marathon</strong></CardText>
                                            <CardText>21st October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527868268/Screen_Shot_2018-06-01_at_16.50.45.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Abingdon Marathon</strong></CardText>
                                            <CardText>21st October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527868268/Screen_Shot_2018-06-01_at_16.50.45.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Beachy Head Marathon</strong></CardText>
                                            <CardText>27th October</CardText>
                                            <Badge color="secondary">Marathon</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="3">
                            <br/>
                            <Badge href="#july" color="secondary"> July (10)</Badge> {''}
                            <Badge href="#august" color="secondary"> August (6) </Badge> {''}
                            <Badge href="#september" color="secondary"> September (10) </Badge> {''}
                            <br/>
                            <br/>
                            <WaddlLabel id="july">July</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                            <CardImg top width="100%"
                                                     src="https://res.cloudinary.com/waddl/image/upload/v1527699102/Screen_Shot_2018-05-30_at_17.48.48.png"
                                                     alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Outlaw Half - Holkham</strong></CardText>
                                            <CardText>1st July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527847553/Screen_Shot_2018-06-01_at_11.02.43.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Half Ironman Edinburgh</strong></CardText>
                                            <CardText>1st July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527847925/Screen_Shot_2018-06-01_at_11.08.28.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Weymouth Middle Distance Triathlon</strong></CardText>
                                            <CardText>8th July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527848199/Screen_Shot_2018-06-01_at_11.13.06.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Fambridge Yacht Haven Triathlon</strong></CardText>
                                            <CardText>8th July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527848640/Screen_Shot_2018-06-01_at_11.22.21.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Long Course Weekend</strong></CardText>
                                            <CardText>13th July</CardText>
                                            <Badge color="secondary">Full</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527848980/Screen_Shot_2018-06-01_at_11.28.10.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>UK Ironman</strong></CardText>
                                            <CardText>15th July</CardText>
                                            <Badge color="secondary">Full</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527840974/Screen_Shot_2018-06-01_at_09.15.29.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Castle Howard Triathlon</strong></CardText>
                                            <CardText>22nd & 23rd July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527848428/Screen_Shot_2018-06-01_at_11.19.49.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Bosworth Triathlon</strong></CardText>
                                            <CardText>22nd July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527847072/Screen_Shot_2018-06-01_at_10.57.12.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Fugitive</strong></CardText>
                                            <CardText>29th July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="http://islandraces.com/middle-distance-triathlon-2018-the-islander/">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527848791/Screen_Shot_2018-06-01_at_11.25.49.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Outlaw Triathlon</strong></CardText>
                                            <CardText>29th July</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="august">August</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527850285/Screen_Shot_2018-06-01_at_11.49.49.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The AJ Bell Triathlon</strong></CardText>
                                            <CardText>4th & 5th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527849142/Screen_Shot_2018-06-01_at_11.31.14.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Snowman Triathlon</strong></CardText>
                                            <CardText>4th & 5th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527849410/Screen_Shot_2018-06-01_at_11.36.14.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Midnight Man</strong></CardText>
                                            <CardText>11th & 12th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527849719/Screen_Shot_2018-06-01_at_11.41.36.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Aberfeldy Triathlon</strong></CardText>
                                            <CardText>19th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527849868/Screen_Shot_2018-06-01_at_11.43.52.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Monster Middle</strong></CardText>
                                            <CardText>19th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527850042/Screen_Shot_2018-06-01_at_11.46.44.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Ironman 70.3 Dun Laoghaire</strong></CardText>
                                            <CardText>19th August</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                            <WaddlLabel id="september">September</WaddlLabel>
                            <WaddlColumns>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527851215/Screen_Shot_2018-06-01_at_12.05.43.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Sundowner Triathlon</strong></CardText>
                                            <CardText>1st September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527850652/Screen_Shot_2018-06-01_at_11.56.17.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The White Bear Triathlon</strong></CardText>
                                            <CardText>8th September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527850652/Screen_Shot_2018-06-01_at_11.56.17.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Ironman Wales</strong></CardText>
                                            <CardText>8th September</CardText>
                                            <Badge color="secondary">Full</Badge> {' '} <Badge color="secondary">$$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527849868/Screen_Shot_2018-06-01_at_11.43.52.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Brutal Extreme Triathlon</strong></CardText>
                                            <CardText>15th September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527859418/Screen_Shot_2018-06-01_at_12.00.10.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Conquer the Chilterns</strong></CardText>
                                            <CardText>23rd September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527851554/Screen_Shot_2018-06-01_at_12.10.17.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Sussex Triathlon</strong></CardText>
                                            <CardText>23rd September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527851036/Screen_Shot_2018-06-01_at_12.03.28.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Mumbles Triathlon</strong></CardText>
                                            <CardText>29th September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527851629/Screen_Shot_2018-06-01_at_12.13.21.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Hever Castle Triathlon</strong></CardText>
                                            <CardText>22nd & 23rd September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527855575/Screen_Shot_2018-06-01_at_13.18.39.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>Ironman 70.3 Weymouth</strong></CardText>
                                            <CardText>23rd September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                                <WaddlCardLink href="https://www.activetrainingworld.co.uk/events/2018/06/17/stewartby_lake_triathlon">
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://res.cloudinary.com/waddl/image/upload/v1527855737/Screen_Shot_2018-06-01_at_13.21.42.png"
                                                 alt="Tri"/>
                                        <CardBody>
                                            <CardText><strong>The Sandman Triathlon</strong></CardText>
                                            <CardText>22nd & 23rd September</CardText>
                                            <Badge color="secondary">Half</Badge> {' '} <Badge color="secondary">$</Badge>
                                        </CardBody>
                                    </Card>
                                </WaddlCardLink>
                            </WaddlColumns>
                        </TabPane>
                        <TabPane tabId="4">
                            <br/>
                            <WaddlColumns>
                                <WaddlCardLink>
                                    <Card>
                                        <CardImg top width="100%"
                                                 src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                                                 alt="Card image cap"/>
                                        <CardBody>
                                            <CardText>Name</CardText>
                                            <Badge color="secondary">New</Badge> {''} <Badge
                                            color="secondary">$</Badge>
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
const raceColor = {
    background: '#FF9833',
};

const tabsBlock = {
    background: '#FF9833',
    paddingLeft: '15px',
    marginTop: '-1px'
};

const waddlContent = {
    paddingLeft: '15px',
    paddingRight: '15px'
};