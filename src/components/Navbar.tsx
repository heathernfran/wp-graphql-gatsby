import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const listStyles = {
  marginBottom: 48,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  listStyleType: "none",
  display: "inline-block",
  marginRight: 12,
  paddingLeft: 0,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

interface Page {
  id: string
  slug: string
  title: string
}

const PagesQuery = graphql`
  query PagesQuery {
    allWpPage {
      nodes {
        id
        slug
        title
      }
    }
  }
`

const Navbar: React.FC = () => {
  const data = useStaticQuery(PagesQuery)

  return (
    <nav>
      <ul style={listStyles}>
        <li style={listItemStyles}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={listItemStyles}>
          <Link to="/posts" style={linkStyle}>
            View all posts
          </Link>
        </li>
        <li style={listItemStyles}>
          <Link to="/projects" style={linkStyle}>
            View all projects
          </Link>
        </li>
        {data.allWpPage.nodes.map((page: Page) => (
          <li key={page.id} style={listItemStyles}>
            <Link to={`/${page.slug}`} style={linkStyle}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
