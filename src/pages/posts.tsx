import * as React from "react"
import { PageProps, graphql } from "gatsby"

export interface Post {
  content: string
  date: string
  slug: string
  title: string
}

export const PostsQuery = graphql`
  query PostsQuery {
    allWpPost {
      nodes {
        content
        date
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
        <>
          <h2>{post.title}</h2>
          <div>{post.content}</div>
          <span>{post.date}</span>
        </>
      ))}
    </div>
  )
}

export default PostsPage
