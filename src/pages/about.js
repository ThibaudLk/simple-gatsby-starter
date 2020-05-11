import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import EcritPar from "../components/ecritPar"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout page="4">
    <SEO title="À propos" />
    <Header siteTitle="À propos de l'auteur" />
    <p> Bonjour, je suis le créateur de ce blog, et voici mon histoire : <br/>
        ...Insérez ici une histoire stylée...
    </p>
    <EcritPar />
  </Layout>


)

export default AboutPage
