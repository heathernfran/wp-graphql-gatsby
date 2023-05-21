import { graphql, useStaticQuery } from "gatsby"

interface SiteMetadata {
  description: string
  siteUrl: string
  title: string
}

export const useSiteMetadata = (): SiteMetadata => {
  const data = useStaticQuery(graphql`
    query MetadataQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
