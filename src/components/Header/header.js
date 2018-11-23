import React from 'react'
import { Link } from 'gatsby'

import styled, { css } from 'react-emotion'
import { Container } from '../../utils/extends'
import { theme } from '../../utils/colors'

import { ReactComponent as Logo } from '../../images/logo.svg'
import SVG from '../svg'

// import './header.scss'

const HeaderWrapper = css`
  position: absolute;
  padding: 40px 0;
  width: 100%;
  background: transparent;
  z-index: 100;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;

  h1 a {
    display: flex;
    align-items: center;
  }
`

const Menu = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.primary};
  min-width: 48px;
  min-height: 48px;
`

const Header = ({ siteTitle }) => (
  <div className={ HeaderWrapper }>
    <HeaderContainer className={Container}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/">
          <Logo />
        </Link>
      </h1>
      <Menu href="#">
        <SVG icon="menu" />
      </Menu>
    </HeaderContainer>
  </div>
)
export default Header
