import gql from 'graphql-tag';

const getUserQuery = gql`
query getUserQuery {
  getUser {
    username,
    firstname,
    lastname
  }
}
`;

export default getUserQuery;
