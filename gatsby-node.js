const path = require("path")

//Create pages dinamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetTemplates {
      posts: allContentfulPost {
        nodes {
          slug
        }
      }
      tags: allContentfulTag {
        nodes {
          slug
        }
      }
    }
  `)

  //POST PAGES
  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/post/${post.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: { slug: post.slug },
    })
  })

  //POSTS BY TAG PAGE
  result.data.tags.nodes.forEach(tag => {
    createPage({
      path: `/${tag.slug}`,
      component: path.resolve(`src/templates/posts-tag-template.js`),
      context: { slug: tag.slug },
    })
  })
}
