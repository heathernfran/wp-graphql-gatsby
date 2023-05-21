import React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { renderHtml } from "../utilities/renderHtml"

interface DataType {
  wpPage: {
    content: string
    date: string
    title: string
  }
}

export const PageTemplateQuery = graphql`
  query PageTemplateQuery($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      content
      date(formatString: "YYYY-MM-DD")
      title
    }
  }
`

const PageTemplate: React.FC<PageProps<DataType>> = ({
  data,
}: PageProps<DataType>) => {
  return (
    <Layout>
      <h2>{data.wpPage.title}</h2>
      <div>{renderHtml(data.wpPage.content)}</div>
      <span>Published: {data.wpPage.date}</span>
    </Layout>
  )
}

export default PageTemplate

export const Head: React.FC<PageProps<DataType>> = ({
  data,
}: PageProps<DataType>) => <SEO title={data.wpPage.title} />
