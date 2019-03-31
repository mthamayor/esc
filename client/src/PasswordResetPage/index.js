import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// relative imports
import Styles from '../assets/styles/Styles';

export default () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10 col-md-6 col-lg-4">
          <form>
            <h4>Request password reset</h4>
            <p>We would send you a link to reset your password</p>
            <TextField
              id="standard-full-width"
              label="Email"
              type="email"
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />

            <div className="mt-3">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={Styles.textTransformNone}
                className="button"
              >
                Send link
              </Button>
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2">
              <Link className="a" to="/auth/login">
                <small>Back to login</small>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
