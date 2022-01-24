const resolvers = {
  Query: {
    weatherByCity:(_, { seriesIds }, { dataSources }) => {
      return dataSources.weatherAPI.withCity(seriesIds)
    }
  }
};

module.exports = resolvers;