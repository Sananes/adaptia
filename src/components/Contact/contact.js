import React from 'react'
import { SectionHeader } from '../../utils/shared';

import './contact.scss'
const Contact = ({color}) => (
  <section className={color ? 'contact ' + color  : 'contact'}>
    <div className="section-container">
      <div className="section-header">
        <h2 className="title">Have a project in mind? <a href="mailto:hello@adaptiadesign.com">Let's chat</a></h2>
        <p className="text">Project minimum starts at $7,000</p>
      </div>
    </div>
  </section>
)

export default Contact
