import React, { useState } from 'react';
import { InputBase } from '@material-ui/core';

import Pallete from 'config/pallete';

interface Props {
  borderRadius?: number;
  placeholder: string;
  unfocusedIcon: React.ReactNode;
  focusedIcon: React.ReactNode;
}

const LoginTextfield: React.FC<Props> = ({
  borderRadius = 32,
  placeholder,
  unfocusedIcon,
  focusedIcon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      style={{
        backgroundColor: Pallete.lightGrey,
        width: '100%',
        borderRadius: borderRadius,
        padding: 12,
        paddingLeft: 24,
        paddingRight: 24,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div>{isFocused ? focusedIcon : unfocusedIcon}</div>
      <div style={{ width: 16 }}></div>
      <InputBase
        placeholder={placeholder}
        fullWidth
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      ></InputBase>
    </div>
  );
};

export default LoginTextfield;
