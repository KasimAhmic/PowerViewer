import React, { FC, memo } from 'react';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';
import { makeStyles } from 'tss-react/mui';
import { StreamVideo, StreamChat } from './';
import { useAppDispatch } from '../app/hooks';
import { removeStream } from '../slices';
import { Stream } from '../@types';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden',
  },
  serviceName: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.common.black,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    textShadow: `0 1px 0 ${theme.palette.common.black}`,
  },
  streamVideo: {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: theme.palette.common.black,
    fontSize: 0,
  },
  streamChat: {
    height: '100%',
  },
  frame: {
    border: 'none',
  },
}));

export const StreamView: FC<Stream> = memo(({ id, service, username }) => {
  const { classes } = useStyles();

  const dispatch = useAppDispatch();

  const close = () => dispatch(removeStream(id));

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.serviceName}>
        <Typography variant='body1'>
          {service} - {username}
        </Typography>

        <IconButton size='small' onClick={close}>
          <Close />
        </IconButton>
      </div>

      <div className={classes.streamVideo}>
        <StreamVideo service={service} username={username} />
      </div>

      <div className={classes.streamChat}>
        <StreamChat service={service} username={username} />
      </div>
    </Paper>
  );
});
