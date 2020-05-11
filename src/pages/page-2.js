import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import EcritPar from "../components/ecritPar"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout page="2">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Header siteTitle="Page 2" />
    <Link to="/">Go back to the homepage</Link>

    <EcritPar />
  </Layout>
)

export default SecondPage
