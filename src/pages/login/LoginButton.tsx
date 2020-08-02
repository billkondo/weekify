import React from 'react';
import { Button } from '@material-ui/core';

import Pallete from 'config/pallete';
import { titleFont } from 'config/fonts';

interface Props {
  borderRadius?: number;
}

const LoginButton: React.FC<Props> = ({ borderRadius = 32 }) => {
  return (
    <Button
      fullWidth
      style={{
        backgroundImage: `linear-gradient(${Pallete.lightGreen}, ${Pallete.green})`,
        fontFamily: titleFont,
        color: Pallete.white,
        borderRadius: borderRadius,
        padding: 12,
        fontSize: 16,
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
