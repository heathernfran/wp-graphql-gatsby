import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { renderHtml } from "../../utilities/renderHtml"

export const ProjectQuery = graphql`
  query ProjectQuery($slug: String!) {
    wpProject(slug: { eq: $slug }) {
      dueDate
      description
      id
      name
    }
  }
`

const ProjectPage = ({ data }: any) => {
  return (
    <Layout>
      <h2>{data.wpProject.name}</h2>
      <div>{renderHtml(data.wpProject.description)}</div>
      <p>Due date: {data.wpProject.dueDate}</p>
    </Layout>
  )
}

export default ProjectPage
