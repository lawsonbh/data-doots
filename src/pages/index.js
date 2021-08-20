// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="The Main Doot">
      <p>Documenting my journey one blog post at a time with the occasional Star Wars reference. Oh, and there might be cat photos.</p>
    <StaticImage
    alt="Stylish cat held by man with odd mustache"
    src="../images/profile-pic.png"
    />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage