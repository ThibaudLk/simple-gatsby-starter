import React from "react"

import Layout from "../components/layout"
import EcritPar from "../components/ecritPar"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout page="2">
    <SEO title="À propos" />
    <h1>À propos</h1>
    <p> Bonjour, je suis le créateur de ce blog, et voici mon histoire : <br/>
        ...Insérez ici une histoire stylée...
    </p>
    <EcritPar />
  </Layout>


)

export default AboutPage
