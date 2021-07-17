import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const Contact = (props) => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <div className='contact-page'>
      <Helmet title={siteTitle} />
      <Layout selectedPage='contact'>
        <section className='contact-us'>
          <h1>Contact Us!</h1>
        </section>
      </Layout>
    </div>
  )
};

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
