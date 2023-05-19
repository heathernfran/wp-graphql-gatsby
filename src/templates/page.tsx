import * as React from "react"
import { graphql } from "gatsby"

export const PageTemplateQuery = graphql`
  query PageTemplateQuery($slug: String!) {
    wpPage(slug: { eq: $slug }) {
      content
      date
      id
      slug
      title
    }
  }
`

const PageTemplate = ({ data }: any) => {
  return (
    <>
      <h2>{data.wpPage.title}</h2>
      <div>{data.wpPage.content}</div>
      <span>{data.wpPage.date}</span>
    </>
  )
}

export default PageTemplate
