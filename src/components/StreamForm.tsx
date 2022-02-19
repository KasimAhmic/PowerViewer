import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { makeStyles } from 'tss-react/mui';
import { StreamService, StreamServices } from '../@types';
import { useAppDispatch } from '../app/hooks';
import { addStream } from '../slices';
import { v4 } from 'uuid';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  usernameField: {
    width: 150,
    '& .MuiInputBase-input': {
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8),
    },
    '& .MuiOutlinedInput-root': {
      color: theme.palette.common.white,
      '& fieldset': {
        borderColor: theme.palette.grey[400],
      },
      '&:hover fieldset': {
        borderColor: theme.palette.grey[400],
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.grey[300],
      },
    },
  },
  serviceSelector: {
    width: 150,
    color: theme.palette.common.white,
    '& .MuiInputBase-input': {
      paddingTop: theme.spacing(0.8),
      paddingBottom: theme.spacing(0.8),
    },
    '& legend': {
      color: '#ffffff !important',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      color: theme.palette.common.white,
      borderColor: theme.palette.grey[400],
      '&:focus': {
        borderColor: theme.palette.grey[400],
      },
      '&:hover': {
        borderColor: theme.palette.grey[400],
      },
    },
  },
  serviceLabel: {
    transform: 'translate(14px, 8px) scale(1)',
  },
  serviceLabelShrink: {
    transform: 'translate(14px, -9px) scale(0.75)',
  },
}));

export const StreamForm = () => {
  const { classes } = useStyles();

  const dispatch = useAppDispatch();

  const [service, setService] = useState<StreamService>();
  const [username, setUsername] = useState<string>('');

  const submit = () => {
    if (Boolean(service) && typeof service !== 'undefined' && Boolean(username)) {
      dispatch(addStream({ id: v4(), service, username }));
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        label='Username'
        size='small'
        className={classes.usernameField}
      />

      <FormControl>
        <InputLabel classes={{ root: classes.serviceLabel, shrink: classes.serviceLabelShrink }}>
          Service
        </InputLabel>
        <Select
          value={service}
          onChange={(e) => setService(e.target.value as StreamService)}
          size='small'
          displayEmpty
          label='Service'
          className={classes.serviceSelector}
        >
          {StreamServices.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant='contained' color='primary' onClick={submit}>
        Add Stream
      </Button>
    </div>
  );
};
