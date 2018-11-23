import React from 'react'
import styled from 'react-emotion'
import { theme, breakpoint } from '../utils/colors'
import { Container, Divider, SectionHeader } from '../utils/extends'
import { rhythm } from '../utils/typography'

// Logos
import GooglePlus from '../images/gatsby-astronaut.png';
import Mogl from '../images/gatsby-astronaut.png';
import MerryJane from '../images/gatsby-astronaut.png';

// Icons
import SVG from './svg'

const CompaniesLayout = styled.div`
  background: ${theme.white};
  color: ${theme.secondary};
`

const CompanyList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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

const CompanyItemImage = ({ name, image, width, link }) => (
  <li>
    {link ?
      <a href={link}>
        <img src={image} alt={name} width={width} />
      </a>
    :
      <img src={image} alt={name} width={width} />
    }
  </li>
)

const CompanyItemSVG = ({ logo }) => (
  <li>
    <SVG icon={logo} width="200" />
  </li>
)

const Companies = () => (
  <CompaniesLayout>
    <div class={Container}>
      <SectionHeader>
        <Divider />
        <h2>We've worked with these companies</h2>
        <p>We specialize in working with a range of companies from Silicon Valley startups to some of the largest media brands in the world.</p>
      </SectionHeader>
      <CompanyList>

        <CompanyItemImage name="Mogl" image={GooglePlus} link="http://google.com" width="500" />

        <CompanyItemImage name="Mogl" />

        <CompanyItemSVG logo="marketing" />

      </CompanyList>
    </div>
  </CompaniesLayout>
)

export default Companies
