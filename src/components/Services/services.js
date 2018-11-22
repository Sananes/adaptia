import React from 'react'
import styled from 'react-emotion'
import { theme } from '../../utils/colors'
import { Container } from '../../utils/extends'
import { scale } from '../../utils/typography'

const ServicesLayout = styled.div`
  background: ${theme.primary};
  color: ${theme.secondary};
`

const ServicesHeader = styled.div`
  padding: 100px 0;

  p {
    max-width: 70%;
  }
`

const Services = () => (
  <ServicesLayout>
    <div class={Container}>
      <ServicesHeader>
        <h2>What we do</h2>
        <p>We deliver robust marketing and design services to some of the biggest and most influential brands and businesses with an entrepreneurial spirit. We’ve successfully built startup projects and seen them through acquisition, grown traffic for major web properties and designed some of the most cutting edge e-commerce experiences.</p>
      </ServicesHeader>
    </div>
  </ServicesLayout>
)

export default Services
