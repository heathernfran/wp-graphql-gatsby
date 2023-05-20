import * as React from "react"
import { Link, PageProps, graphql } from "gatsby"

export interface Post {
  content: string
  date: string
  id: string
  slug: string
  title: string
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

const PostsPage: React.FC<PageProps> = ({ data }: any) => {
  return (
    <div>
      {data.allWpPost.nodes.map((post: Post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  )
}

export default PostsPage
