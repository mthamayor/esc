import React from 'react';
import { Link } from 'react-router-dom';
import constants from '../utils/constants';
import routes from '../utils/constants/routes';
import './dashboard-navigation.css';

export default props => {
  const { subpage } = props;
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <ul className="col-12 col-sm-10 d-flex dashboard-navigation">
          <li
            className={` ${
              subpage === constants.NEW_TRANSACTION ? 'active-link' : ''
            }`}
          >
            <Link to={routes.DASHBOARD_NEW}>New transaction</Link>
          </li>
          <li
            className={` ${
              subpage === constants.TRANSACTIONS ? 'active-link' : ''
            }`}
          >
            <Link to={routes.DASHBOARD_TRANSACTIONS}>Transactions</Link>
          </li>
          <li
            className={` ${subpage === constants.PROFILE ? 'active-link' : ''}`}
          >
            <Link to={routes.DASHBOARD_PROFILE}>Profile</Link>
          </li>
          <li className={` ${subpage === constants.HELP ? 'active-link' : ''}`}>
            <Link to={routes.DASHBOARD_HELP}>Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
