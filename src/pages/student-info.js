import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const StudentInformation = () => (
  <Layout>
    <SEO title="Student Information" />
    <h1>Hi I am a student information page page</h1>
    <p>Welcome to student info page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default StudentInformation
