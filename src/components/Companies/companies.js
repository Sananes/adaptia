import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Reveal from 'react-reveal/Reveal';

// Shared Assets
import { SectionHeader } from '../../utils/shared'
import Img from 'gatsby-image'
import SVG from '../svg'
import './companies.scss'

const CompanyItemImage = ({ image, link, delay }) => (
  <Reveal effect="fadeInUp" delay={delay}>
    <li className="company-item">
        <a href={link}>
          <Img fluid={image} />
        </a>
    </li>
  </Reveal>
)

const CompanyItemSVG = ({ name, link, delay }) => (
  <Reveal effect="fadeInUp" delay={delay}>
    <li className="company-item">
        <a href={link}>
          <SVG icon={name} strokeWidth={0} />
        </a>
    </li>
  </Reveal>
)

export const logoImage = graphql`
fragment logoImage on File {
  childImageSharp {
    fluid(maxWidth: 300) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
`

const Companies = name => (
  <StaticQuery
    query={graphql`
      query {
        godaddy: file(relativePath: { eq: "logos/godaddy-pro.png" }) {
          ...logoImage
        }
        hootsuite: file(relativePath: { eq: "logos/hootsuite.png" }) {
          ...logoImage
        }
        mogl: file(relativePath: { eq: "logos/moglcom.png" }) {
          ...logoImage
        }
        merryjane: file(relativePath: { eq: "logos/merryjane.png" }) {
          ...logoImage
        }
        bing: file(relativePath: { eq: "logos/bing-certified-pro.png" }) {
          ...logoImage
        }
        persista: file(relativePath: { eq: "logos/persista.png" }) {
          ...logoImage
        }
        internetbrands: file(
          relativePath: { eq: "logos/internet-brands.png" }
        ) {
          ...logoImage
        }
      }
    `}
    render={data => (
      <section className="companies">
        <div className="section-container">
          <SectionHeader
            title="We've worked with these companies"
            text="We specialize in working with a range of companies from Silicon
              Valley startups to some of the largest media brands in the world."
          />

          <h4>Clients</h4>

          <ul className="companies-list">
            <CompanyItemSVG
              name="disney"
              link="http://disneymaker.com"
              delay={0}
            />

            <CompanyItemImage
              name="Persista"
              link="http://camino.ai"
              image={data.persista.childImageSharp.fluid}
              delay={100}
            />

            <CompanyItemImage
              name="MerryJane"
              link="http://www.merryjane.com"
              image={data.merryjane.childImageSharp.fluid}
              delay={200}
            />

            <CompanyItemImage
              name="Internet Brands"
              link="http://www.internetbrands.com"
              image={data.internetbrands.childImageSharp.fluid}
              delay={300}
            />

            <CompanyItemImage
              name="Mogl"
              image={data.mogl.childImageSharp.fluid}
              link="http://www.mogl.com"
              width={120}
              delay={400}
            />
          </ul>

          <h4>Partners</h4>

          <ul className="companies-list">
            <CompanyItemSVG
              name="google"
              link="http://www.google.com"
            />
            <CompanyItemImage
              name="GoDaddy Pro"
              image={data.godaddy.childImageSharp.fluid}
              link="http://www.godaddy.com"
            />

            <CompanyItemSVG
              name="shopify"
              link="http://www.shopify.com"
            />

            <CompanyItemImage
              name="HootSuite"
              image={data.hootsuite.childImageSharp.fluid}
              link="http://hootsuite.com"
            />

            <CompanyItemImage
              name="Bing"
              image={data.bing.childImageSharp.fluid}
              link="http://www.bing.com"
            />
          </ul>
        </div>
      </section>
    )}
  />
)

export default Companies
