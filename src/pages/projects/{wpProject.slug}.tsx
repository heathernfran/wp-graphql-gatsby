import * as React from "react"
import { graphql } from "gatsby"

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
    <>
      <h2>{data.wpProject.name}</h2>
      <div>{data.wpProject.description}</div>
      <p>{data.wpProject.dueDate}</p>
    </>
  )
}

export default ProjectPage
