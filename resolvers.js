const data = require('./data.json');

const resolvers = {
  Query: {
    getLocation: (_, { course }) =>
      data.find(location => location.course.toUpperCase() === course.toUpperCase()),

    getAllLocations: () => data
  }
};

module.exports = resolvers;
