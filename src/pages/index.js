import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero/hero'
import Services from '../components/Services/services'
import Companies from '../components/companies'
// import { rhythm } from '../utils/typography'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Services />
    <Companies />
  </Layout>
)

export default IndexPage
