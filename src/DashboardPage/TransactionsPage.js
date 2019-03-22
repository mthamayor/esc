import React from 'react';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  AppBar,
  Toolbar,
  InputBase
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import routes from '../utils/constants/routes';

const styles = theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
});

const index = props => {
  const { classes } = props;
  let id = 0;
  function createData(transId, title, amount, role, date, status) {
    id += 1;
    return { id, transId, title, amount, role, date, status };
  }

  const rows = [
    createData(
      12113,
      'Electronics',
      '159.00',
      'Seller',
      '22-oct-2019',
      'complete'
    ),
    createData(
      42788,
      'Television HISense',
      '1200.00',
      'Buyer',
      '22-oct-2019',
      'pending'
    ),
    createData(21323, 'Stereo', '22000.00', 'Buyer', '22-oct-2019', 'cancelled')
  ];
  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-12">
          <Paper>
            <AppBar
              position="static"
              color="default"
              className={classes.AppBar}
            >
              <Toolbar>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
            <div style={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Trans ID</TableCell>
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Role</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.transId}</TableCell>
                      <TableCell align="right">
                        <Link to={routes.DASHBOARD_TRANSACTIONS}>
                          {row.title}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{`₦${
                        row.amount
                      }(NGN)`}</TableCell>
                      <TableCell align="right">
                        <div>{row.role}</div>
                        <small className="disabled">
                          to: anifowosehabeeb@gmail.com
                        </small>
                      </TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};
index.propTypes = {
  classes: PropTypes.objectOf.isRequired
};
export default withStyles(styles)(index);
