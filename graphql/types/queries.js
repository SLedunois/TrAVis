const queries = [
  `
  type Query {
    getUser: User!
    
    getDashboards: [Dashboard]!
  }
  `,
];

module.exports = queries;
