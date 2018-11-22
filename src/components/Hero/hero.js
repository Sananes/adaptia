import React from 'react'
import styled, { css } from 'react-emotion'
import { theme, breakpoint } from '../../utils/colors'
import { Container } from '../../utils/extends'
import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
// import './hero.scss'

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
  width: 40%;
  color: ${theme.primary};

  @media (max-width: ${breakpoint.medium}) {
    width: 100%;
  }

  h1 {
    font-size: 74px;
    max-width: 520px;

   @media (max-width: ${breakpoint.medium}) {
      font-size: 40px;
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
  left: 20px;
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
        {/* <p className="hero-text">We're a passionate studio, dedicating to craft your online experience in all aspects of the web. Accessibility is our number one priority.</p> */}
      </HeroContent>
      <HeroArrow href="#">
        <Arrow />
      </HeroArrow>
    </HeroContainer>
  </HeroLayout>
)

export default Hero
