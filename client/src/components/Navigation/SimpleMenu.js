import React, { Component } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

class SimpleMenu extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { links } = this.props;
    const menuStyle = {
      color: 'black',
      fontSize: '0.8em',
      fontWeight: 'bold',
      width: '100%',
      height: '100%'
    };

    const mappedMenuLinks = links.map(link => {
      return (
        <MenuItem onClick={this.handleClose}>
          <Link to={link.link} style={menuStyle}>
            {link.name}
          </Link>
        </MenuItem>
      );
    });

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {mappedMenuLinks}
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
