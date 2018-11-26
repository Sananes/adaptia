import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
// import { keyframes } from 'react-emotion'

// Shared Assets
import { SectionHeader } from '../../utils/shared'
import Img from 'gatsby-image'
import SVG from '../svg'
import './companies.scss'

const CompanyItemImage = ({ name, image, width, link, delay }) => (
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

const Companies = name => (
  <StaticQuery
    query={graphql`
      query {
        godaddy: file(relativePath: { eq: "logos/godaddy-pro.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hootsuite: file(relativePath: { eq: "logos/hootsuite.png" }) {
          childImageSharp {
            fluid(maxHeight: 300) {
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
        <div className="section-container">
          <SectionHeader
            title="We've worked with these companies"
            text="We specialize in working with a range of companies from Silicon
              Valley startups to some of the largest media brands in the world."
          />

          <h4>Clients</h4>

          <div className="companies-list">
            <CompanyItemSVG
              name="disney"
              link="http://disneymaker.com"
              delay={0}
            />

            <CompanyItemImage
              name="Persista"
              image={data.persista.childImageSharp.fluid}
              delay={100}
            />

            <CompanyItemImage
              name="MerryJane"
              image={data.merryjane.childImageSharp.fluid}
              delay={200}
            />

            <CompanyItemImage
              name="Internet Brands"
              image={data.internetbrands.childImageSharp.fluid}
              delay={300}
            />

            <CompanyItemImage
              name="Mogl"
              image={data.mogl.childImageSharp.fluid}
              width={120}
              delay={400}
            />
          </div>

          <h4>Partners</h4>

          <div className="companies-list">
            <CompanyItemSVG
              name="google"
              link="http://google.com"
            />
            <CompanyItemImage
              name="GoDaddy Pro"
              image={data.godaddy.childImageSharp.fluid}
              link="http://google.com"
            />

            <CompanyItemSVG
              name="shopify"
              link="http://shopify.com"
            />

            <CompanyItemImage
              name="HootSuite"
              image={data.hootsuite.childImageSharp.fluid}
              link="http://hootsuite.com"
            />

            <CompanyItemImage
              name="Bing"
              image={data.bing.childImageSharp.fluid}
              link="http://bing.com"
            />
          </div>
        </div>
      </section>
    )}
  />
)

export default Companies

// class Order extends React.Component {
//   renderOrder = (key) => {

//     const fish = this.props.fishes[key]
//     const count = this.props.order[key]
//     const isAvailable = fish.status === 'available'

//     if(!isAvailable) {
//       <li>
//         Sorry {fish ? fish.name : 'fish'} is no longer available
//       </li>
//     }
//     return (
//       <li>
//       {count} lbs {fish.name}
//         {formatPrice(count * fish.price)}
//       </li>
//     )
//   }
//   render() {
//     return (

//     )
//   }
// }
