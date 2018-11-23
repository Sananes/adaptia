import React from 'react'
import Layout from '../components/layout'
import HeroSection from '../components/Hero/hero'
import ServicesSection from '../components/Services/services'
import Img from 'gatsby-image'
import CompaniesSection from '../components/Companies/companies'
// import './index.scss'
// import TestimonialsSection from '../components/testimonials'
// import ContactSection from '../components/testimonials'

const IndexPage = (props) => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <CompaniesSection />
     {/*<TestimonialsSection /> */}
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    godaddy: file(relativePath: { eq: "logos/godaddy-pro.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mogl: file(relativePath: { eq: "logos/moglcom.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    merryjane: file(relativePath: { eq: "logos/merryjane.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bing: file(relativePath: { eq: "logos/bing-certified-pro.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    persista: file(relativePath: { eq: "logos/persista.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    internetbrands: file(relativePath: { eq: "logos/internet-brand.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
