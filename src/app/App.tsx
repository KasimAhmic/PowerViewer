import React, { FC } from 'react';
import { Header, Streams } from '../components';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100%',
  },
}));

export const App: FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Streams />
    </div>
  );
};
