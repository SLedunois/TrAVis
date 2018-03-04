import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import graphql from 'react-apollo/graphql';
import { bool, object, shape } from 'prop-types';

import getUserQuery from './query';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';
import Dashboards from '../Dashboards/Dashboards';
import Timeline from '../Timeline/Timeline';
import Messages from '../Messages/Messages';

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
        <div>
          <Menu user={user} />
          <Route exact path="/" component={Dashboards} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/messages" component={Messages} />
        </div>
      );
    }
  }
}

App.propTypes = {
  data: shape({
    getUser: object,
    loading: bool,
  }).isRequired,
};

export default graphql(getUserQuery)(App);
