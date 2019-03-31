import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Divider, Avatar } from '@material-ui/core';
import google from '../assets/svg/Google-color.svg';
import facebook from '../assets/svg/Facebook-color.svg';
// relative imports
import Styles from '../assets/styles/Styles';

export default () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-10 col-md-6 col-lg-4">
          <form>
            <h4>Sign up</h4>
            <p>Create your account</p>
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
            <TextField
              id="standard-full-width"
              label="Password"
              type="password"
              helperText=""
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              id="standard-full-width"
              label="Re-enter Password"
              type="password"
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
                Sign up
              </Button>
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2">
              <Link className="a" to="/auth/forgot-password">
                <small>Forgot password?</small>
              </Link>
            </div>
          </form>
          <Divider />
          <div className="text-center mt-3">
            <p className="">You can also sign up with</p>
            <div className="d-flex justify-content-center">
              <Avatar src={google} style={Styles.avatar} />
              <Avatar src={facebook} />
            </div>
            <Divider className="mt-3 mb-3" />
            <p>
              Already have an account?{' '}
              <Link className="a" to="/auth/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
