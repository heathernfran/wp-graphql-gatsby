import React from "react"
import { Link, PageProps, graphql } from "gatsby"
import Layout from "../../components/Layout"

interface Post {
  id: string
  slug: string
  title: string
}

type DataType = {
  allWpPost: {
    nodes: {
      id: string
      slug: string
      title: string
    }[]
  }
}

export const PostsQuery = graphql`
  query PostsQuery {
    allWpPost {
      nodes {
        id
        slug
        title
      }
    }
  }
`

const PostsPage = ({ data }: PageProps<DataType>) => {
  return (
    <Layout>
      {data.allWpPost.nodes.map((post: Post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </Layout>
  )
}

export default PostsPage
