import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropType from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import fetchUser from "../../store/actions/user";

import Loader from "../../components/Loader/Loader";
import Menu from "../../components/Menu/Menu";
import Dashboards from "../Dashboards/Dashboards";
import Messages from "../Messages/Messages";
import Timeline from "../Timeline/Timeline";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.fetchUser();
  }

  render() {
    if (!this.props.user) {
      return <Loader />;
    }
    return (
      <div>
        <Menu user={this.props.user} />
        <Route exact path="/" component={Dashboards} />
        <Route exact path="/timeline" component={Timeline} />
        <Route exact path="/messages" component={Messages} />
      </div>
    );
  }
}

App.propTypes = {
  user: PropType.object,
  fetchUser: PropType.func.isRequired
};

App.defaultProps = {
  user: null
};

function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
