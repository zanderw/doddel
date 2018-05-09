import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {ThemeProvider} from 'styled-components'
import theme from '../components/theme'

// images
import favicon from '../assets/favicon/favicon.ico';
import metaImage from '../assets/images/waddl_meta.png';

// bootstrap
import '../assets/scss/bootstrap.scss'

const Layout = ({children, data}) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                {name: 'description', content: `${data.site.siteMetadata.description}`},
                {name: 'keywords', content: `${data.site.siteMetadata.keywords}`},
                {name: 'image', content: `${metaImage}`}
            ]}
        >
            <link rel="shortcut icon" href={favicon}/>
        </Helmet>
        <ThemeProvider theme={theme}>
            {children()}
        </ThemeProvider>
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
        description
        keywords
      }
    }
  }
`
