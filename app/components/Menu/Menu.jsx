import React from "react";
import { NavLink } from "react-router-dom";
import { PropTypes } from "prop-types";
import styles from "./styles.css";

import Logo from "../../icons/Logo";
import DashboardLogo from "../../icons/Dashboard";
import TimelineLogo from "../../icons/Timeline";
import MessageLogo from "../../icons/Message";

const Menu = props => {
  const { user } = props;
  return (
    <header className={styles.header}>
      <ul>
        <li className={styles.dashboardMenu}>
          <NavLink
            exact
            activeClassName={`${styles.active} ${styles.activeStroke}`}
            to="/"
          >
            <DashboardLogo /> Dashboard
          </NavLink>
        </li>
        <li className={styles.timelineMenu}>
          <NavLink
            exact
            activeClassName={`${styles.active} ${styles.activeStroke}`}
            to="/timeline"
          >
            <TimelineLogo /> Timeline
          </NavLink>
        </li>
        <li className={styles.messagesMenu}>
          <NavLink
            exact
            activeClassName={`${styles.active} ${styles.activeFill}`}
            to="/messages"
          >
            <MessageLogo /> Messages
          </NavLink>
        </li>
      </ul>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.logout}>
        <a href="/auth/logout" id="logout">
          {`${user.firstname} ${user.lastname}`}
        </a>
      </div>
    </header>
  );
};

Menu.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
  }).isRequired
};

export default Menu;
