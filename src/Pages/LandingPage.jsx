import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import styled from "styled-components";
import Footer from '../Components/Footer/Footer';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

const LandingPageStyles = styled.div`

    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`

function LandingPage() {
  return (
    <LandingPageStyles>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </LandingPageStyles>
  )
}

export default LandingPage
