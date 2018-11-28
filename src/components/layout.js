import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header/header'
import '../styles/_reset.scss'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Marketing & Branding Agency in San Diego' },
            { name: 'keywords', content: 'marketing, design, branding, development san diego agency' },
          ]}
        >
          <html lang="en" />
          <link rel="stylesheet" href="https://use.typekit.net/ayp3lpj.css"></link>
        </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
