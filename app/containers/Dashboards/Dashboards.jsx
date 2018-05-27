import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Head from '../../components/Head/Head';
import Select from '../../components/Select/Select';
import ShareIcon from '../../icons/Share';
import SubMenuIcon from '../../icons/SubMenu';
import styles from './styles.css';


class Dashboards extends Component {
  render() {
    const dashboards = [
      {
        id: 1,
        name: 'test 1',
      }, {
        id: 2,
        name: 'test 2',
      }, {
        id: 3,
        name: 'test 3',
      }, {
        id: 4,
        name: 'test 4',
      },
    ];
    return (
      <div>
        <Head>
          <Select
            className={styles.headSelect}
            objects={dashboards}
            disabled={false}
            onChange={(value) => {
              console.log(value);
            }}
          />
          <ul className={`right-magnet ${styles.dashboardsHeadRight}`}>
            <li><Button value="Add a widget" type="ADD" /></li>
            <li>
              <a className="pointer">
                <ShareIcon />
              </a>
            </li>
            <li>
              <a className="pointer">
                <SubMenuIcon />
              </a>
            </li>
          </ul>
        </Head>
        <h1>Dashboards</h1>
      </div>
    );
  }
}

export default Dashboards;
