const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Location {
    course: String
    building: String
    room: String
    hours: String
    occupancy: String
  }

  type Query {
    getLocation(course: String!): Location
    getAllLocations: [Location]
  }
`;

module.exports = typeDefs;
