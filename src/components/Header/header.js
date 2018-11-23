import React from 'react'
import { Link } from 'gatsby'

// Assets
import { ReactComponent as Logo } from '../../images/logo.svg'
import SVG from '../svg'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/">
          <Logo />
        </Link>
      </h1>
      <a className="header-menu" href="#">
        <SVG icon="menu" />
      </a>
    </div>
  </header>
)
export default Header
