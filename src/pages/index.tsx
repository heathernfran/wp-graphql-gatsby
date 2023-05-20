import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span style={headingAccentStyles}>
          — you just made a Gatsby site! 🎉🎉🎉
        </span>
      </h1>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
