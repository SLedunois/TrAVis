const type = [
  `
    type User {
      username: String
      password: String
      firstname: String
      lastname: String
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
