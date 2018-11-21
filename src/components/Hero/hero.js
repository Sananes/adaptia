import React from 'react'

import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import './hero.scss'

const Hero = () => (
  <div className="hero">
    <div className="container">
      <div class="hero-logo">
        <HeroLogo />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">A marketing and branding agency</h1>
        {/* <p className="hero-text">We're a passionate studio, dedicating to craft your online experience in all aspects of the web. Accessibility is our number one priority.</p> */}
      </div>
    </div>
  </div>
)

export default Hero
