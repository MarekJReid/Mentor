import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SpecialOffers = () => (
  <Layout>
    <SEO title="Special Offers" />
    <h1>Hi I am a special offers page</h1>
    <p>Welcome to special offers page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SpecialOffers
