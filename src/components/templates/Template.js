import React from 'react'
import PropTypes from 'prop-types'

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
                <SiteBar />
                <SideBar pageType={pageType}  />
                <div
                    style={{
                        marginLeft: '200px',
                        padding: '0 0',
                        boxShadow: '0 0 0 1px rgba(0,0,0,.05), 0 4px 24px 2px rgba(0,0,0,.1)'
                    }}
                >
                    {children}
                </div>
            </div>
        )
    }
}
