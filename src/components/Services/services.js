import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'
import { SectionHeader } from '../../utils/shared'

// Assets
import SVG from '../svg'
import './services.scss'

const ServiceItem = ({icon, title, text, delay}) => (
  <Reveal effect="fadeInUp" delay={delay}>
    <li className={icon ? icon : 'list-item'}>
      <Reveal effect="animate-svg" duration={4000}><SVG icon={icon ? icon : 'nothing'} width={48}></SVG></Reveal>
      <h3>{title ? title : 'Untitled'}</h3>
      <p>{text ? text: 'Untitled'}</p>
    </li>
  </Reveal>
)

const Services = () => (
  <section className="services">
    <div className="section-container">
      <SectionHeader
        title="What we do"
        text="We deliver robust marketing and design services to some of the biggest and most influential brands and businesses with an entrepreneurial spirit. We’ve successfully built startup projects and seen them through acquisition, grown traffic for major web properties and designed some of the most cutting edge e-commerce experiences."
      />
      <ul className="service-list">
        <ServiceItem
          icon="marketing"
          title="Marketing"
          text="Crafting some of the most innovative online experiences using Shopify’s platform with clients ranging from family owned bakeries to restaurants with integrated POS systems to large online catalogues with 1000’s of SKU’s built to maintain hundreds of thousands in revenue."
          delay={100}
        />

        <ServiceItem
          icon="ecommerce"
          title="Shopify"
          text="Our study of the web started in early 1999 with the start of the dotcom boom. From basic HTML/CSS web pages to complex solutions utilizing PHP, Ruby on Rails, React and more, we’ve formed a strong foundation of the frameworks and tools that form the basis of the web today. From our experience, we’ve crafted an expertise in the use of minimalistic and intuitive user experiences which we’ve found to boost conversions and useability on the web."
          delay={200}
        />

        <ServiceItem
          icon="design"
          title="Web Design"
          text="We bring 15+ years experience in creative branding and identity development to help you build your world class brand. We use a systematic process to help you build a brand that effectively positions your product/service in the marketplace."
          delay={300}
        />

        <ServiceItem
          icon="branding"
          title="Branding"
          text="Bringing more than 10 years experience in optimizing organic SEO campaigns across a variety of media. We specialize in growing organic visibility to content on the internet’s most valuable properties. We've worked in crafting large scale SEO strategy for some of the world's most innovative companies and bring a wealth of experience in the digital space to our client's brands."
          delay={400}
        />
      </ul>
    </div>
  </section>
)

export default Services
