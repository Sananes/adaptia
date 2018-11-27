import React from 'react'
import Reveal from 'react-reveal/Reveal'
import Layout from '../components/layout'
import HeroSection from '../components/Hero/hero'
import ServicesSection from '../components/Services/services'
import CompaniesSection from '../components/Companies/companies'
import TestimonialsSection from '../components/Testimonials/testimonials'
import ContactSection from '../components/Contact/contact'

const IndexPage = (props) => (
  <Layout>
      <HeroSection />
      <Reveal effect="slide-up">
        <ServicesSection />
        <CompaniesSection />
        <TestimonialsSection />
        <ContactSection color="yellow" />
      </Reveal>
  </Layout>
)

export default IndexPage
