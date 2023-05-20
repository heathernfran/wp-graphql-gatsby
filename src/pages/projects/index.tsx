import * as React from "react"
import { Link, graphql } from "gatsby"
import type { PageProps } from "gatsby"

export interface Project {
  id: string
  name: string
  slug: string
}

export const ProjectsQuery = graphql`
  query ProjectsQuery {
    allWpProject {
      nodes {
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
        <Link to={`/projects/${project.slug}`} key={project.id}>
          <h2>{project.name}</h2>
        </Link>
      ))}
    </div>
  )
}

export default ProjectsPage
