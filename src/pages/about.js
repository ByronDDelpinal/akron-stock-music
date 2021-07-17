import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import React from 'react'

import Layout from '../components/layout'

const About = (props) => {
  const siteTitle = props.data.site.siteMetadata.title
  return (
    <>
      <Helmet title={siteTitle} />
      <Layout selectedPage='about'>
        <h1>About Akron Stock Music</h1>
        <section>
          <p className="small-paragraph">Akron stock music is a place for blah blah things here probably text, let's not jump into the genres so quick. Give the people some explanation or something I don't know. Akron stock music is a place for blah blah things here probably text, let's not jump into the genres so quick. Give the people some explanation or something I don't know.</p>
        </section>
      </Layout>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
