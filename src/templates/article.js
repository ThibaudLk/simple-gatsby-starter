import React from 'react';

import Layout from "../components/layout"
import EcritPar from "../components/ecritPar"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Article = ({ data }) => {
    const { title, date } = data.markdownRemark.frontmatter
    const __html = data.markdownRemark.html

    return (
        <Layout>
      <SEO title={title} description={data.markdownRemark.excerpt} />
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html }} />
      <EcritPar />
    </Layout>
    );
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
 
export default Article;