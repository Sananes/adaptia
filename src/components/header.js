import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { device } from '../helpers/sizes'

import logoURL, { ReactComponent as Logo } from '../images/logo.svg'
import './header.scss'

const HeaderWrapper = styled.div`
  background-color: red;

  @media ${device.laptop} {
    background: blue;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>

      <Link
        to="/"
        style={{

        }}
      >
        <Logo />
      </Link>
    </h1>
  </HeaderWrapper>
)

export default Header
