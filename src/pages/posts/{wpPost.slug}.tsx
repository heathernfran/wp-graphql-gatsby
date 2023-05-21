import React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
import { renderHtml } from "../../utilities/renderHtml"

type DataType = {
  wpPost: {
    content: string
    date: string
    id: string
    title: string
  }
}

export const PostQuery = graphql`
  query PostQuery($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      content
      date(formatString: "YYYY-MM-DD")
      id
      title
    }
  }
`

const PostPage = ({ data }: PageProps<DataType>) => {
  return (
    <Layout>
      <h2>{data.wpPost.title}</h2>
      <div>{renderHtml(data.wpPost.content)}</div>
      <p>Published: {data.wpPost.date}</p>
    </Layout>
  )
}

export default PostPage

export const Head: React.FC<PageProps<DataType>> = ({
  data,
}: PageProps<DataType>) => <SEO title={data.wpPost.title} />
