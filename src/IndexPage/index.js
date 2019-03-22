import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DoneOutline from '@material-ui/icons/DoneOutline';
import temp from '../assets/img/temp.png';
// relative imports
import '../assets/css/IndexPage.css';
import Styles from "../assets/styles/Styles";

export default () => {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6">
            <h2 className="home-text">A better way to perform transactions</h2>
            <p>Perform safe transactions when you buy or sell</p>
            <Button
              variant="contained"
              style={Styles.textTransformNone}
              color="primary"
            >
              Get started
            </Button>
          </div>
          <div className="col-12 col-md-6">
            <img className="home-image img-fluid" src={temp} alt="img" />
          </div>
        </div>
      </div>
      <section className="how-it-works">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-12 font-weight-bold pt-4 p-md-4 text-center">
              <h4>
                We help safeguard your interests when you enter an agreement
                with a buyer or seller
              </h4>
            </div>
            <div className="col-12 col-md-6">
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutline />
                  </ListItemIcon>
                  <ListItemText primary="Buyer and Seller agree on transaction terms" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutline />
                  </ListItemIcon>
                  <ListItemText primary="Buyer pays us" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutline />
                  </ListItemIcon>
                  <ListItemText primary="Seller ships the product to the buyer" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutline />
                  </ListItemIcon>
                  <ListItemText primary="Buyer inspects and approves transaction" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <DoneOutline />
                  </ListItemIcon>
                  <ListItemText primary="We release funds to the seller" />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
