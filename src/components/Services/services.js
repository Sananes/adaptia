import React from 'react'
import styled from 'react-emotion'
import { theme, breakpoint } from '../../utils/colors'
import { Container } from '../../utils/extends'
import { rhythm } from '../../utils/typography'

// Icons
import SVG from '../svg'

const ServiceItem = styled.li`
`

const ServicesLayout = styled.div`
  background: ${theme.primary};
  color: ${theme.secondary};
`

const ServicesHeader = styled.div`
  padding: ${rhythm(3)} 0 ${rhythm(1.5)} ;

  @media (max-width: ${breakpoint.medium}) {
    padding: ${rhythm(2)} 0 ${rhythm(1.5 / 1.5)} ;
  }

  p {
    max-width: 70%;

    @media (max-width: ${breakpoint.medium}) {
      max-width: 100%;
    }
  }
`

const Divider = styled.div`
  border-bottom: 2px solid ${theme.secondary};
  width: 120px;
  margin-bottom: ${rhythm(1.5)};
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

const Services = () => (
  <ServicesLayout>
    <div class={Container}>
      <ServicesHeader>
        <Divider />
        <h2>What we do</h2>
        <p>We deliver robust marketing and design services to some of the biggest and most influential brands and businesses with an entrepreneurial spirit. We’ve successfully built startup projects and seen them through acquisition, grown traffic for major web properties and designed some of the most cutting edge e-commerce experiences.</p>
      </ServicesHeader>
      <ServiceList>
        <ServiceItem>
          <SVG icon="marketing" width="48" />
          <h3>Marketing</h3>
          <p>Crafting some of the most innovative online experiences using Shopify’s platform with clients ranging from family owned bakeries to restaurants with integrated POS systems to large online catalogues with 1000’s of SKU’s built to maintain hundreds of thousands in revenue.</p>
        </ServiceItem>

        <ServiceItem>
          <SVG icon="ecommerce" width="48" />
          <h3>Shopify</h3>
          <p>Our study of the web started in early 1999 with the start of the dotcom boom. From basic HTML/CSS web pages to complex solutions utilizing PHP, Ruby on Rails, React and more, we’ve formed a strong foundation of the frameworks and tools that form the basis of the web today. From our experience, we’ve crafted an expertise in the use of minimalistic and intuitive user experiences which we’ve found to boost conversions and useability on the web.</p>
        </ServiceItem>

        <ServiceItem>
          <SVG icon="design" width="48" />
          <h3>Web Design</h3>
          <p>We bring 15+ years experience in creative branding and identity development to help you build your world class brand. We use a systematic process to help you build a brand that effectively positions your product/service in the marketplace.</p>
        </ServiceItem>

        <ServiceItem>
          <SVG icon="branding" width="48" />
          <h3>Branding</h3>
          <p>Bringing more than 10 years experience in optimizing organic SEO campaigns across a variety of media. We specialize in growing organic visibility to content on the internet’s most valuable properties. We've worked in crafting large scale SEO strategy for some of the world's most innovative companies and bring a wealth of experience in the digital space to our client's brands.</p>
        </ServiceItem>
      </ServiceList>
    </div>
  </ServicesLayout>
)

export default Services
