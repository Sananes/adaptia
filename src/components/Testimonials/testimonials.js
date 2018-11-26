import React from 'react'
import Reveal from 'react-reveal/Reveal'
import { SectionHeader } from '../../utils/shared'

// Assets
import { ReactComponent as BlockquoteSVG } from '../../images/blockquote.svg'
import './testimonials.scss'

const Testimonials = (props) => (
  <section className="testimonials">
    <div className="section-container">
      <SectionHeader title={props.title ? props.title : 'What they say'} />
      <div className="testimonial-quote">
        <p>Adaptia has helped us over the past 7 years in building an effective online presence for our online Bakery! The team helped us grow our sales and call volume on a monthly basis since the inception of our business. Great communication & quick turnaround on projects!</p>

        <div className="testimonial-details">
          <p>Christiane S.
          <span class="testimonial-person">Owner of <a href="http://www.bonpastry.com">BonPastry.com</a></span></p>
        </div>
      </div>
    </div>
    <Reveal effect="animate-svg">
      <BlockquoteSVG className="blockquote-svg" />
    </Reveal>
  </section>
)

export default Testimonials
