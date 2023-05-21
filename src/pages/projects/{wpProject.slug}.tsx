import React from "react"
import type { PageProps } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { renderHtml } from "../../utilities/renderHtml"

type DataType = {
  wpProject: {
    description: string
    dueDate: string
    id: string
    name: string
  }
}

export const ProjectQuery = graphql`
  query ProjectQuery($slug: String!) {
    wpProject(slug: { eq: $slug }) {
      description
      dueDate
      id
      name
    }
  }
`

const ProjectPage = ({ data }: PageProps<DataType>) => {
  return (
    <Layout>
      <h2>{data.wpProject.name}</h2>
      <div>{renderHtml(data.wpProject.description)}</div>
      <p>Due date: {data.wpProject.dueDate}</p>
    </Layout>
  )
}

export default ProjectPage
