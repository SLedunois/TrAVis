import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';
import Dashboards from '../Dashboards/Dashboards';
import Timeline from '../Timeline/Timeline';
import Messages from '../Messages/Messages';

class App extends Component {
  render() {
    const loading = false;
    if (loading) {
      return (
        <Loader />
      );
    }
    const user = {
      username: 'sled',
      firstname: 'Simon',
      lastname: 'LEDUNOIS',
    };
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

export default App;
