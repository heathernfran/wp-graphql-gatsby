import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

export interface Page {
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

const Navbar = () => {
  const data = useStaticQuery(PagesQuery)

  return (
    <nav>
      <ul style={listStyles}>
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
