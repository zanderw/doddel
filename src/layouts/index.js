import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from '../components/theme'

import ReactNavbar from '../components/ReactNavbar'
import SideBar from '../components/SideBar'

import '../assets/scss/bootstrap.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <ReactNavbar />
    <SideBar />
    <div
      style={{
        marginLeft: '200px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.05), 0 4px 24px 2px rgba(0,0,0,.1)'
      }}
    >
      <ThemeProvider theme={theme}>
        {children()}
      </ThemeProvider>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
