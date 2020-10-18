const path = require("path")

//Create pages dinamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPosts {
      posts: allContentfulPost {
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
}
