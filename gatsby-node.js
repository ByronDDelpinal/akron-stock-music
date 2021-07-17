const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allContentfulGenre {
        nodes {
          name
        }
      }
    }
  `).then(result => {
    result.data.allContentfulGenre.nodes.forEach(genre => {
      createPage({
        path: `/genres/${genre.name.toLowerCase()}`,
        component: path.resolve('./src/template/single-genre.js'),
        context: {
          name: genre.name
          // Data passed to context is available
          // in page queries as GraphQL variables.
        }
      })
    })
  })
}
