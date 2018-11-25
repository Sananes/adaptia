import React from 'react'
import Layout from '../components/layout'
import HeroSection from '../components/Hero/hero'
import ServicesSection from '../components/Services/services'
import CompaniesSection from '../components/Companies/companies'
import TestimonialsSection from '../components/Testimonials/testimonials'
import ContactSection from '../components/Contact/contact'

const IndexPage = (props) => (
  <Layout>
    <HeroSection />
    <ServicesSection />
    <CompaniesSection />
    <TestimonialsSection />
    <ContactSection color="yellow" />
  </Layout>
)

export default IndexPage
