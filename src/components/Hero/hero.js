import React from 'react'
import Reveal from 'react-reveal/Reveal'

// Assets
import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import SVG from '../svg'
import './hero.scss'

const Hero = () => (
  <Reveal effect="animate-hero">
    <section className="hero">
      <div className="hero-logo">
        <HeroLogo />
      </div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="reveal first">A marketing </span>
              <span className="reveal second">and branding </span>
              <span className="reveal third">agency</span></h1>
          </div>
          <Reveal effect="fadeInUp">
            <a className="hero-arrow" href="#hello">
              <SVG icon="arrow" width={40} />
            </a>
          </Reveal>
        </div>
    </section>
  </Reveal>
)

export default Hero
