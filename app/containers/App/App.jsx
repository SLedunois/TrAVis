import React, { Component } from 'react';
import gql from 'graphql-tag';
import graphql from 'react-apollo/graphql';
import { bool, object, shape } from 'prop-types';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

class App extends Component {
  render() {
    if (this.props.getUserQuery.loading) {
      return (
        <Loader />
      );
    }
    const user = this.props.getUserQuery.getUser;
    if (user) {
      return (
        <Menu user={user} />
      );
    }
    return (
      <h1>Hello world</h1>
    );
  }
}

const getUserQuery = gql`
  query getUserQuery {
    getUser {
      username,
      firstname,
      lastname
    }
  }
`;

App.propTypes = {
  getUserQuery: shape({
    getUser: object,
    loading: bool,
  }).isRequired,
};

export default graphql(getUserQuery, { name: 'getUserQuery' })(App);
