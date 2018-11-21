import React from 'react'
import { Link } from 'gatsby'

import { ReactComponent as Logo } from '../../images/logo.svg'
import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/">
          <Logo />
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
