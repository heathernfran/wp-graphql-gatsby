import React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

interface Project {
  id: string
  name: string
  slug: string
}

type DataType = {
  allWpProject: {
    nodes: {
      id: string
      name: string
      slug: string
    }[]
  }
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

const ProjectsPage = ({ data }: PageProps<DataType>) => {
  return (
    <Layout>
      {data.allWpProject.nodes.map((project: Project) => (
        <Link to={`/projects/${project.slug}`} key={project.id}>
          <h2>{project.name}</h2>
        </Link>
      ))}
    </Layout>
  )
}

export default ProjectsPage

export const Head: HeadFC = () => <SEO title="All Projects" />
