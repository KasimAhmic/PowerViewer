import React, { FC } from 'react';
import { StreamView } from './';
import { makeStyles } from 'tss-react/mui';
import { useAppSelector } from '../app/hooks';
import { selectStreams } from '../slices';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    gap: theme.spacing(0.5),
    height: '100%',
    margin: theme.spacing(0.5),
  },
}));

export const Streams: FC = () => {
  const { classes } = useStyles();

  const streams = useAppSelector(selectStreams);

  return (
    <div className={classes.root}>
      {streams.map((stream) => (
        <StreamView id={stream.id} service={stream.service} username={stream.username} key={stream.id} />
      ))}
    </div>
  );
};
