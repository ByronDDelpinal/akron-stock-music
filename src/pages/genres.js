import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Link from 'gatsby-link';
import { graphql } from 'gatsby'

function GenreIndexPage(props) {
  const siteTitle = `${props.data.site.siteMetadata.title} | Genres`
  console.log(props)
  const genres = props.data.allContentfulGenre.nodes;

  return (
    <div class='and-writes-page'>
      <Helmet title={siteTitle} />
      <Layout selectedPage='genres'>
        <h1>Music Genres</h1>
        <ul className="genre-selection">
          {genres.map(genre => (
            <li><Link to={`/genres/${genre.name.toLowerCase()}`} className="button">{genre.name}</Link></li>
          ))}
        </ul>
      </Layout>
    </div>
  )
}

export default GenreIndexPage

export const pageQuery = graphql`
  query GenreIndexQuery {
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
