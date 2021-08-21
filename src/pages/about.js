// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>
          <ol>
          <li>I care deeply about the environment.</li>
          <li>I solve business problems with data and technology.</li>
          <li>I garden more than a normal amount.</li>
          <li>I like New Star Wars more than Old Star Wars.</li>
          </ol>
      </p>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage