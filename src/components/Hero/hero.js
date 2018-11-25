import React from 'react'

// Assets
import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import SVG from '../svg'
import './hero.scss'

const Hero = () => (
  <section className="hero">
    <div className="hero-logo">
      <HeroLogo />
    </div>
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">A marketing and branding agency</h1>
      </div>
      <a className="hero-arrow" href="#hello">
        <SVG icon="arrow" width={40} />
      </a>
    </div>
  </section>
)

export default Hero
