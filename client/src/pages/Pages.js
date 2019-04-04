import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';

export default () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10">
          <h4>
            Available Pages (Please note that they are not functional yet)
          </h4>
          <p>
            If you wish for any kind of changes to the layout, please contact
            the dev team
          </p>
          <Divider />
          <div className="row">
            <div className="col-12">
              <p>
                <Link to="/">Home page (ongoing)</Link>
              </p>
              <p>
                <Link to="/auth/login">Login page (completed)</Link>
              </p>
              <p>
                <Link to="/auth/signup">Signup page (completed)</Link>
              </p>
              <p>
                <Link to="/auth/forgot-password">
                  Forgot password page (completed)
                </Link>
              </p>
              <p>
                <Link to="/dashboard/transactions">
                  Transaction history page (ongoing)
                </Link>
              </p>
              <p>
                <Link to="/dashboard/new-transaction">
                  New transaction (ongoing)
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
