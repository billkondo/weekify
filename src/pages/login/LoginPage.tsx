import React from 'react';
import { Grid } from '@material-ui/core';

import LoginCard from './LoginCard';

export const LoginPage = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={10} sm={8} style={{ marginTop: 32 }}>
        <LoginCard></LoginCard>
      </Grid>
    </Grid>
  );
};
