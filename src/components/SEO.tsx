import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

interface Props {
  children?: Element
  description?: string
  pathname?: string
  title?: string
}

interface SEOMetadata {
  description: string
  title: string
  url: string
}

const SEO: React.FC<Props> = ({
  children,
  description,
  pathname,
  title,
}: Props) => {
  const {
    description: defaultDescription,
    siteUrl,
    title: defaultTitle,
  } = useSiteMetadata()

  const seo: SEOMetadata = {
    description: description ?? defaultDescription,
    title: title ?? defaultTitle,
    url: `${siteUrl}${pathname ?? ""}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}

export default SEO
