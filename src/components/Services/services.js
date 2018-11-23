import React from 'react'
import styled from 'react-emotion'
import { theme, breakpoint } from '../../utils/colors'
import { Container, Divider, SectionHeader } from '../../utils/extends'
import { rhythm } from '../../utils/typography'

import SVG from '../svg'

const ServicesLayout = styled.div`
  background: ${theme.primary};
  color: ${theme.secondary};
`

const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${rhythm(3)};
  padding-bottom: ${rhythm(3)};

  @media (max-width: ${breakpoint.medium}) {
    grid-template-columns: 1fr;
    grid-gap: ${rhythm(2)};
  }

  svg {
    margin-bottom: ${rhythm(0.5)};
  }
`

const ServiceItemLi = styled.li`
  list-style: none;
`

const ServiceItem = ({icon, title, text}) => (
  <li className={icon ? icon : 'list-item'}>
    <SVG icon={icon ? icon : 'nothing'} width='48'></SVG>
    <h3>{title ? title : 'Untitled'}</h3>
    <p>{text ? text: 'Untitled'}</p>
  </li>
)

const Services = () => (
  <ServicesLayout>
    <div class={Container}>
      <SectionHeader>
        <Divider />
        <h2>What we do</h2>
        <p>We deliver robust marketing and design services to some of the biggest and most influential brands and businesses with an entrepreneurial spirit. We’ve successfully built startup projects and seen them through acquisition, grown traffic for major web properties and designed some of the most cutting edge e-commerce experiences.</p>
      </SectionHeader>
      <ServiceList>
        <ServiceItem
          icon="marketing"
          title="Marketing"
          text="Crafting some of the most innovative online experiences using Shopify’s platform with clients ranging from family owned bakeries to restaurants with integrated POS systems to large online catalogues with 1000’s of SKU’s built to maintain hundreds of thousands in revenue."
        />

        <ServiceItem
          icon="ecommerce"
          title="Shopify"
          text="Our study of the web started in early 1999 with the start of the dotcom boom. From basic HTML/CSS web pages to complex solutions utilizing PHP, Ruby on Rails, React and more, we’ve formed a strong foundation of the frameworks and tools that form the basis of the web today. From our experience, we’ve crafted an expertise in the use of minimalistic and intuitive user experiences which we’ve found to boost conversions and useability on the web."
        />

        <ServiceItem
          icon="design"
          title="Web Design"
          text="We bring 15+ years experience in creative branding and identity development to help you build your world class brand. We use a systematic process to help you build a brand that effectively positions your product/service in the marketplace."
        />

        <ServiceItem
          icon="branding"
          title="Branding"
          text="Bringing more than 10 years experience in optimizing organic SEO campaigns across a variety of media. We specialize in growing organic visibility to content on the internet’s most valuable properties. We've worked in crafting large scale SEO strategy for some of the world's most innovative companies and bring a wealth of experience in the digital space to our client's brands."
        />
      </ServiceList>
    </div>
  </ServicesLayout>
)

export default Services
