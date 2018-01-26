const type = [
  `
    type User {
      username: String
      password: String
    }
  `,
];

const query = [
  `
    type Query {
      getUser: User!
    }
  `,
];

const mutations = [];

module.exports = [
  ...type,
  ...query,
  ...mutations,
];
