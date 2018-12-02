import React from 'react'
import SVG from '../svg'
import './menu.scss'
import { CSSTransition } from 'react-transition-group';

const Menu = (props) => {
  const {visible} = props

  return(
    <CSSTransition
      classNames="animate"
      timeout={1000}
      in={visible}
    >
      <div className="menu-takeover">
        <div className="menu-cover" />
        <div class="menu-container">
          <button className="menu-close" onClick={props.toggleMenu}>
            <SVG icon="close" width={32} />
          </button>
          <div className="menu-content">
            <h2>Have a project in mind?</h2>
            <ul class="information">
              <li><a href="mailto:hello@adaptiadesign.com">hello@adaptiadesign.com</a></li>
              <li><a href="tel:+1 (732) 567-0876">+1 (732) 567-0876</a></li>
              <li>2292 Faraday Ave, Carlsbad, CA 92008, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Menu
