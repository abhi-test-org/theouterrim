import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import Table from "../components/Table"
import { weaponsColumns } from "../components/Weapons"
import IndividualCard from "../components/shared/IndividualCard"

export default ({ data }) => {
  return (
    <Dashboard>
      <IndividualCard item={data.qualitiesYaml} />
      <Table
        marginTop
        title="Weapons"
        columns={weaponsColumns}
        data={data.allWeaponsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query($generatedId: String!, $quality: String!) {
    qualitiesYaml(generatedId: { eq: $generatedId }) {
      name
      active
      ranked
      effect
      index
    }
    allWeaponsYaml(filter: { special: { glob: $quality } }) {
      edges {
        node {
          name
          skill
          damage
          crit
          range
          encumbrance
          hp
          price
          rarity
          special
          index
          generatedId
        }
      }
    }
  }
`
