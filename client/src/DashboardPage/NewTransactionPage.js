import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@material-ui/core';
import DropdownTextBox from './DropdownTextBox';

export default () => {
  const [value, setValue] = useState('seller');
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 col-md-6">
          <div className="row">
            <div className="col-12">
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">Select your role</h6>
                </FormLabel>
                <RadioGroup
                  aria-label="TransactionRole"
                  name="transactionRole"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="seller"
                    control={<Radio />}
                    label={
                      <span>
                        <strong>Seller</strong>- I am selling the goods /
                        services
                      </span>
                    }
                  />
                  <FormControlLabel
                    value="buyer"
                    control={<Radio />}
                    label={
                      <span>
                        <strong>Buyer</strong>- I am buying the goods / services
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="col-12">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    {`What are you ${
                      value === 'buyer' ? 'buying' : 'selling'
                    }?`}{' '}
                  </h6>
                </FormLabel>
                <DropdownTextBox />
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    {` ${
                      value === 'buyer' ? "Buyer's" : "Seller's"
                    } email address`}{' '}
                  </h6>
                </FormLabel>
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    {` ${
                      value === 'buyer' ? "Buyer's" : "Seller's"
                    } phone number`}{' '}
                  </h6>
                </FormLabel>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
