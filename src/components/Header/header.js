import React from 'react'
import Reveal from 'react-reveal/Reveal'
import { Link } from 'gatsby'

// Assets
import { ReactComponent as Logo } from '../../images/logo.svg'
import SVG from '../svg'
import './header.scss'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <Reveal effect="fadeInUp" delay={500}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/">
            <Logo />
          </Link>
        </h1>
      </Reveal>
      <Reveal effect="fadeInUp" delay={200}>
        <button className="header-menu" href="#">
          <SVG icon="menu" />
        </button>
      </Reveal>
    </div>
  </header>
)
export default Header
