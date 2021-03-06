import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import media from "../media";
import favicon from '../../assets/favicon/favicon.ico';

import SiteBar from "../organisms/SiteBar";
import SideBar from "../organisms/SideBar";


export default class Template extends React.PureComponent {
    static propTypes = {
        pageType: PropTypes.string
    };

    render() {
        const {
            pageType,
            children,
        } = this.props

        return (
            <div>
                <link rel="shortcut icon" type="image/png" href={favicon} />
                <SiteBar />
                <SideBar pageType={pageType}  />
                <WaddlContent>
                    {children}
                </WaddlContent>
            </div>
        )
    }
}

const WaddlContent = styled.div `
    margin-left: 200px;
    padding: 0;
    padding-top: 52px
    box-shadow: 0 0 0 1px rgba(0,0,0,.05), 0 4px 24px 2px rgba(0,0,0,.1);
    
    ${media.tablet`
       margin-left: 0;
    `};
`;
