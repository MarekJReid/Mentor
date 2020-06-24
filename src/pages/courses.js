import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Courses = () => (
  <Layout>
    <SEO title="Courses" />
    <h1>Hi I am a courses page</h1>
    <p>Welcome to courses page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Courses
