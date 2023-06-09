import React, { type PropsWithChildren } from "react"
import Navbar from "./Navbar"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const Layout: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <main style={pageStyles}>
      <Navbar />
      <div>{children}</div>
    </main>
  )
}

export default Layout
