const path = require("path")

exports.createPages = async ({ actions, graphql }: any) => {
  const { createPage } = actions

  const pageSlugsQuery = await graphql(`
    query pageSlugsQuery {
      allWpPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  pageSlugsQuery.data.allWpPage.edges.forEach((edge: any) => {
    createPage({
      path: edge.node.slug,
      component: path.resolve(`src/templates/page.tsx`),
      context: {
        slug: edge.node.slug,
        // pagePath: edge.node.slug,
        // content: edge.node.content,
        // date: edge.node.date,
        // title: edge.node.title,
      },
    })
  })
}
