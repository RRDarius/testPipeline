import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2}>
        <TextField
          username
          id="outlined-error"
          label="Username"
        />
        <TextField
          password
          id="outlined-error-helper-text"
          label="Password"
        />
        <Button variant="contained">Login</Button>
    </Stack>
  );
}