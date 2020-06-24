import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Schools = () => (
  <Layout>
    <SEO title="Schools" />
    <h1>Hi I am a schools page</h1>
    <p>Welcome to schools page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Schools
