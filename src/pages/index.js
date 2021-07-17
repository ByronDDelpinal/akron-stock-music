import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Link from 'gatsby-link';
import React from 'react'

import Layout from '../components/layout'

const IndexPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout>
      <Helmet title={siteTitle} />
      <div className='indexpage'>
        <div className='hero'>
          <h1 className='hero--header'>Akron Stock Music</h1>
          <h3 className='hero--sub-header'>
            A place for non-profits to configure stock music<br />
            made by artists from Akron, OH.
          </h3>
        </div>
        <section className="dark">
          <p className="small-paragraph">Akron stock music is a place for blah blah things here probably text, let's not jump into the genres so quick. Give the people some explanation or something I don't know. Akron stock music is a place for blah blah things here probably text, let's not jump into the genres so quick. Give the people some explanation or something I don't know.</p>
        </section>
        <section>
          <h2>What kind of music are you looking for?</h2>
          <ul className="genre-selection">
            <li><Link to="/genres/happy" className="button">Happy</Link></li>
            <li><Link to="/genres/happy" className="button">Upbeat</Link></li>
            <li><Link to="/genres/happy" className="button">Intense</Link></li>
            <li><Link to="/genres/happy" className="button">Dreary</Link></li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulGenre {
      nodes {
        name
      }
    }
  }
`
