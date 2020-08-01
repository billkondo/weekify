import React from 'react';
import { Typography } from '@material-ui/core';

import { titleFont } from 'config/fonts';

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return (
    <Typography style={{ fontFamily: titleFont }} variant="h4">
      {text}
    </Typography>
  );
};

export default Title;
