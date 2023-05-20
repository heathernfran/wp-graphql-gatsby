import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"

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
      <div>{data.wpProject.description}</div>
      <p>{data.wpProject.dueDate}</p>
    </Layout>
  )
}

export default ProjectPage
