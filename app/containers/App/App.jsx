import React, { Component } from 'react';
import graphql from 'react-apollo/graphql';
import { bool, object, shape } from 'prop-types';

import getUserQuery from './query';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

class App extends Component {
  render() {
    if (this.props.data.loading) {
      return (
        <Loader />
      );
    }
    const user = this.props.data.getUser;
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

App.propTypes = {
  data: shape({
    getUser: object,
    loading: bool,
  }).isRequired,
};

export default graphql(getUserQuery)(App);
