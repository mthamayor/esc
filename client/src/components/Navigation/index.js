import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import './navigation.css';
import SimpleMenu from './SimpleMenu';

export default () => {
  /* const [open, setOpen] = useState(false); */

  const [links] = useState([
    {
      name: 'Start Transaction',
      link: '/start-transaction'
    },
    {
      name: 'Company',
      link: '/start-transaction'
    },
    {
      name: 'Log in',
      link: '/auth/login'
    },
    {
      name: 'Sign up',
      link: '/auth/signup'
    }
  ]);

  const mappedLinks = links.map(link => {
    return (
      <li>
        <Link className="link" to={link.link}>
          {link.name}
        </Link>
      </li>
    );
  });

  return (
    <header>
      <ul className="navigation">
        <div className="brand">brands</div>
        <div className="links d-none d-sm-block">{mappedLinks}</div>
        <div className="d-sm-none">
          <SimpleMenu links={links} />
        </div>
      </ul>
      <Divider />
    </header>
  );
};
