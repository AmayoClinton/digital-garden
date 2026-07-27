const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    actions.createNodeField({ name: 'slug', node, value })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve('./src/templates/post.js')
  const noteTemplate = path.resolve('./src/templates/note.js')
  const tagTemplate  = path.resolve('./src/templates/tag.js')

  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      ) {
        nodes { fields { slug } frontmatter { tags } }
      }
      notes: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      ) {
        nodes { fields { slug } }
      }
    }
  `)

  if (result.errors) throw result.errors

  result.data.posts.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: { slug: node.fields.slug },
    })
  })

  result.data.notes.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: noteTemplate,
      context: { slug: node.fields.slug },
    })
  })

  const tags = new Set()
  result.data.posts.nodes.forEach(node => {
    ;(node.frontmatter.tags || []).forEach(tag => tags.add(tag))
  })
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: tagTemplate,
      context: { tag },
    })
  })
}
