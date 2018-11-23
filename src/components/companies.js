import React from 'react'
import styled from 'react-emotion'
import { theme, breakpoint } from '../utils/colors'
import { Container, Divider, SectionHeader } from '../utils/extends'
import { rhythm } from '../utils/typography'

// Icons
import SVG from './svg'

const ServiceItem = styled.li`
`

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

const CompanyItem = ({ name, link, type, alt}) => (
  <li>
    { type === 'svg' ? <SVG icon={name} width="200" /> : name }
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

        <CompanyItem name="Mogl" />

        <CompanyItem name="Mogl" />

        <CompanyItem name="menu" type="svg" />

      </CompanyList>
    </div>
  </CompaniesLayout>
)

export default Companies
