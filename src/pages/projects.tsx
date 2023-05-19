import * as React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"

export interface Project {
  description: string
  dueDate: string
  id: string
  name: string
  slug: string
}

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allWpProject {
      nodes {
        description
        dueDate
        id
        name
        slug
      }
    }
  }
`

const ProjectsPage: React.FC<PageProps> = ({ data }: any) => {
  return (
    <div>
      {data.allWpProject.nodes.map((project: Project) => (
        <>
          <h2>{project.name}</h2>
          <div>{project.description}</div>
          <p>{project.dueDate}</p>
        </>
      ))}
    </div>
  )
}

export default ProjectsPage
