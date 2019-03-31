import React, { useState, useEffect } from 'react';
import { Divider } from '@material-ui/core';
import DashboardNavigation from './DashboardNavigation';
import TransactionsPage from './TransactionsPage';
import constants from '../utils/constants';
import NewTransactionPage from './NewTransactionPage';

export default ({ match }) => {
  const [subpage, setSubpage] = useState('transactions');
  useEffect(() => {
    setSubpage(match.params.subpage);
  });

  let currentSubPage = <TransactionsPage />;
  switch (subpage) {
    case constants.NEW_TRANSACTION:
      currentSubPage = <NewTransactionPage />;
      break;
    case constants.TRANSACTIONS:
      currentSubPage = <TransactionsPage />;
      break;
    default:
      currentSubPage = <TransactionsPage />;
  }
  return (
    <div className="">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col mb-5">
            <h2>Welcome, Anifowose!</h2>
          </div>
        </div>
      </div>
      <DashboardNavigation subpage={subpage} />
      <div>
        <Divider />
      </div>
      {currentSubPage}
    </div>
  );
};
