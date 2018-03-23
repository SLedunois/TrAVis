
const models = require('./models');
const queries = require('./queries');
const mutations = require('./mutations');

const typeDefs = [
  ...models,
  ...queries,
  ...mutations,
];

module.exports = typeDefs;
