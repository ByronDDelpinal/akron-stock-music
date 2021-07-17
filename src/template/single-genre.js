import React from 'react'
import { graphql } from 'gatsby'

import AudioList from '../components/audio-list'
import Layout from '../components/layout'

const singleGenreTemplate = props => {
  const genre = props.data.contentfulGenre;

  return (
    <Layout selectedPage='writes'>
      <h1>Single Genre</h1>

      <section className="audio-arrangement">
        <ul className="audio audio-list" id="audio-selection-box"></ul>
        <div className="audio-controls">
          <button className="button audio-control" id="play-selection">
            Play Selection
            </button>
          <button className="button audio-control" id="remove-selection">
            Remove Selection
            </button>
          <button className="button audio-control" id="download-selection">
            Download Selection
            </button>
        </div>
      </section>
      <section className="audio-selection">
        <AudioList audioOptions={genre.audioOptions} id="audio-options-box" />
      </section>

    </Layout>
  )
}

export default singleGenreTemplate

export const pageQuery = graphql`
  query genreTemplateQuery($name: String) {
    contentfulGenre(name: { eq: $name }) {
      audioOptions {
        audioFile {
          file {
            details {
              size
            }
            url
          }
        }
        name
      }
      name
      id
    }
  }
`
