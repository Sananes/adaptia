import React from 'react'
import './companies.scss'
import { StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

// Logos
import GoDaddy from '../../images/logos/godaddy-pro.png'
import Mogl from '../../images/logos/moglcom.png'
import MerryJane from '../../images/logos/merryjane.png'
import Persista from '../../images/logos/persista.png'
import HootSuite from '../../images/logos/hootsuite.png'

const CompanyItemImage = ({ name, image, width, link }) => (
  <li className="company-item">
    {link ? (
      <a href={link}>
        <Img fluid={image} />
      </a>
    ) : (
      <Img fluid={image} />
    )}
  </li>
)

const Companies = name => (
  <StaticQuery
    query={graphql`
      query {
        godaddy: file(relativePath: { eq: "logos/godaddy-pro.png" }) {
          childImageSharp {
            fluid(maxHeight: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mogl: file(relativePath: { eq: "logos/moglcom.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        merryjane: file(relativePath: { eq: "logos/merryjane.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bing: file(relativePath: { eq: "logos/bing-certified-pro.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        persista: file(relativePath: { eq: "logos/persista.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        internetbrands: file(
          relativePath: { eq: "logos/internet-brands.png" }
        ) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="companies">
        <div className="companies-container">
          <div className="section-header">
            <div className="divider" />
            <h2 className="title">We've worked with these companies</h2>
            <p className="text">
              We specialize in working with a range of companies from Silicon
              Valley startups to some of the largest media brands in the world.
            </p>
          </div>

          <h4>Clients</h4>

          <div className="companies-list">
            <CompanyItemImage
              name="GoDaddy Pro"
              image={data.godaddy.childImageSharp.fluid}
              link="http://google.com"
            />

            <CompanyItemImage
              name="Persista"
              image={data.persista.childImageSharp.fluid}
            />

            <CompanyItemImage
              name="MerryJane"
              image={data.merryjane.childImageSharp.fluid}
            />

            <CompanyItemImage
              name="Internet Brands"
              image={data.internetbrands.childImageSharp.fluid}
            />

            <CompanyItemImage
              name="Persista"
              image={data.persista.childImageSharp.fluid}
            />
          </div>

          <h4>Partners</h4>
        </div>
      </section>
    )}
  />
)

export default Companies
