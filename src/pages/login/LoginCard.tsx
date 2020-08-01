import React, { useState } from 'react';
import { Paper, Grid, Icon } from '@material-ui/core';
import { EmailOutlined, Email, LockOutlined, Lock } from '@material-ui/icons';

import Title from 'components/typography/Title';
import LoginTextfield from './LoginTextfield';
import LoginButton from './LoginButton';
import { APP_NAME } from 'config/common';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Paper elevation={2} style={{ padding: 32 }}>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Title text={APP_NAME}></Title>
        </Grid>

        <div style={{ margin: 24 }}></div>

        <Grid item container lg={4} md={6} sm={8} xs={12}>
          <LoginTextfield
            placeholder="Email"
            unfocusedIcon={
              <Icon>
                <EmailOutlined></EmailOutlined>
              </Icon>
            }
            focusedIcon={
              <Icon>
                <Email></Email>
              </Icon>
            }
          ></LoginTextfield>
        </Grid>

        <div style={{ margin: 16 }}></div>

        <Grid item container lg={4} md={6} sm={8} xs={12}>
          <LoginTextfield
            placeholder="Password"
            unfocusedIcon={
              <Icon>
                <LockOutlined></LockOutlined>
              </Icon>
            }
            focusedIcon={
              <Icon>
                <Lock></Lock>
              </Icon>
            }
          ></LoginTextfield>
        </Grid>

        <div style={{ margin: 32 }}></div>

        <Grid item container lg={4} md={6} sm={8} xs={12}>
          <LoginButton></LoginButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginCard;
