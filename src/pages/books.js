import React from "react"
import { graphql } from "gatsby"

import { booksColumns } from "../components/Books"
import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"

export default function Books({ data }) {
  return (
    <Dashboard>
      <SEO title="Books" />
      <Table
        title="Books"
        columns={booksColumns}
        data={data.allBooksYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query BooksPageQuery {
    allBooksYaml {
      edges {
        node {
          name
          system
          initials
          key
          generatedId
        }
      }
    }
  }
`