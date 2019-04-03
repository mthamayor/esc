import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Input,
  Select,
  Switch
} from '@material-ui/core';
import DropdownTextBox from './DropdownTextBox';
import MenuItem from '@material-ui/core/MenuItem';

export default () => {
  const [shipping, setShipping] = useState(false);
  const [data, setValue] = useState({
    role: 'seller',
    inspectionDays: 7
  });
  const handleChange = event => {
    const newData = Object.assign({}, data);
    const { name, value } = event.target;
    newData[name] = value;
    setValue(newData);
  };

  const menuItems = [];
  for (let i = 1; i < 31; i++) {
    menuItems.push(i);
  }
  const mappedMenuItems = menuItems.map(menuItem => {
    return (
      <MenuItem key={menuItem - 1} value={menuItem}>
        {`${menuItem}`}
      </MenuItem>
    );
  });

  return (
    <div className="container mt-5">
      <form className="row">
        <div className="col-10 col-md-6">
          <div className="row">
            <div className="col-12">
              <FormControl component="fieldset">
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">Select your role</h6>
                </FormLabel>
                <RadioGroup
                  aria-label="TransactionRole"
                  name="role"
                  value={data.role}
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
                      data.role === 'buyer' ? 'buying' : 'selling'
                    }?`}{' '}
                  </h6>
                </FormLabel>
                <DropdownTextBox />
              </FormControl>
            </div>
            <div className="col-12 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">Product description</h6>
                </FormLabel>
                <Input
                  multiline={true}
                  type="text"
                  rows={5}
                  placeholder={`Please leave a detailed description as the transaction could be rejected if the ${
                    data.role === 'buyer' ? 'buyer' : 'seller'
                  } is not satisfied with it`}
                  inputProps={{
                    'aria-label': 'Phone'
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-6">
          <div className="row">
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    {` ${
                      data.role === 'buyer' ? "Buyer's" : "Seller's"
                    } email address`}{' '}
                  </h6>
                </FormLabel>
                <Input
                  type="email"
                  inputProps={{
                    'aria-label': 'Phone'
                  }}
                />
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    {` ${
                      data.role === 'buyer' ? "Buyer's" : "Seller's"
                    } phone number`}{' '}
                  </h6>
                </FormLabel>
                <Input
                  type="phone"
                  inputProps={{
                    'aria-label': 'Phone'
                  }}
                />
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">Price</h6>
                </FormLabel>
                <Input
                  startAdornment={<span className="text-success ml-3">₦</span>}
                  inputProps={{
                    'aria-label': 'Phone'
                  }}
                />
              </FormControl>
            </div>

            <div className="col-12 mt-4">
              <FormControl>
                <FormLabel>
                  <span>
                    Inspection period <br />
                    <small>
                      {`The order will be completed automatically after 
                      ${data.inspectionDays} ${
                        data.inspectionDays > 1 ? 'days' : 'day'
                      }`}
                    </small>
                  </span>
                </FormLabel>
                <Select
                  style={{ width: 100 }}
                  value={data.inspectionDays}
                  onChange={handleChange}
                  inputProps={{
                    name: 'inspectionDays'
                  }}
                >
                  {mappedMenuItems}
                </Select>
              </FormControl>
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">
                  <h6 className="font-weight-bold">
                    Shipping Fee{' '}
                    <span>
                      <Switch
                        checked={shipping}
                        onChange={() => setShipping(!shipping)}
                        value="checkedB"
                      />
                    </span>{' '}
                  </h6>
                </FormLabel>
                {shipping && (
                  <Input
                    startAdornment={
                      <span className="text-success ml-3">₦</span>
                    }
                    inputProps={{
                      'aria-label': 'Phone'
                    }}
                  />
                )}
              </FormControl>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
