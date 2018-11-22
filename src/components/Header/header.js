import React from 'react'
import { Link } from 'gatsby'

import { css } from 'react-emotion'
import { Container } from '../../utils/extends'

import { ReactComponent as Logo } from '../../images/logo.svg'
// import './header.scss'

const HeaderWrapper = css`
  position: absolute;
  padding: 30px 0;
  width: 100%;
  background: transparent;
  color: $color-text;
`

const Header = ({ siteTitle }) => (
  <div className={ HeaderWrapper }>
    <div className={ Container }>
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
