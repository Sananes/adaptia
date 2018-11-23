import React from 'react'
import styled from 'react-emotion'
import { theme, breakpoint } from '../../utils/colors'
import { Container } from '../../utils/extends'
import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import { scale } from '../../utils/typography'
import SVG from '../svg'

const HeroLayout = styled.div`
  background: ${theme.secondary};
`

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const HeroContent = styled.div`
  color: ${theme.primary};

  @media (max-width: ${breakpoint.medium}) {
    width: 100%;
  }

  h1 {
    ${scale(0.95)}
    max-width: 600px;

   @media (max-width: ${breakpoint.medium}) {
      ${scale(0.5)}
    }
  }

  p {
    max-width: 490px;
    font-size: 130%;
    line-height: 1.66;
  }
`

const HeroMark = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  overflow: hidden;

  svg {
    stroke-dasharray: 3800;
    stroke-dashoffset: 0;
    stroke-width: 2;
    animation: dash 5s ease-in-out 1s;
    animation-fill-mode: both;
    height: 100%;
  }
`

const HeroArrow = styled.a`
  position: absolute;
  color: ${theme.primary};
  left: 50px;
  bottom: 50px;
`

const Hero = () => (
  <HeroLayout>
    <HeroMark>
      <HeroLogo />
    </HeroMark>
    <HeroContainer className={ Container }>
      <HeroContent>
        <h1 className="hero-title">A marketing and branding agency</h1>
      </HeroContent>
      <HeroArrow href="#">
        <SVG icon="arrow" width="40" />
      </HeroArrow>
    </HeroContainer>
  </HeroLayout>
)

export default Hero
