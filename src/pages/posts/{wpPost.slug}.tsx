import * as React from "react"
import { graphql } from "gatsby"

export interface Post {
  content: string
  date: string
  id: string
  title: string
}

export const PostQuery = graphql`
  query PostQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      date
      id
      title
    }
  }
`

const PostPage = ({ data }: any) => {
  return (
    <>
      <h2>{data.wpPost.title}</h2>
      <div>{data.wpPost.content}</div>
      <p>{data.wpPost.date}</p>
    </>
  )
}

export default PostPage