import React from 'react'
import Reveal from 'react-reveal/Reveal'
import { scroller } from 'react-scroll'


// Assets
import { ReactComponent as HeroLogo } from '../../images/hero-logo.svg'
import SVG from '../svg'
import './hero.scss'

const Hero = () => (
  <Reveal ssrFadeout effect="hero-animate">
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
          <button onClick={() => scroller.scrollTo('services', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOut'
          })} className="hero-arrow">
            <SVG icon="arrow" width={40} />
          </button>
        </div>
    </section>
  </Reveal>
)

export default Hero
