import React, { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';
import { StreamForm } from './';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
}));

export const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar variant='dense' className={classes.toolbar}>
        <Typography variant='h6'>PowerViewer</Typography>

        <StreamForm />
      </Toolbar>
    </AppBar>
  );
};
