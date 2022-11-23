import React from 'react';
import { Typography } from '@mui/material';

interface MuiTestProps {}

const MuiTest = ({ ...props }: MuiTestProps) => {
  return (
    <Typography variant="body2" align="center">
      hello
    </Typography>
  );
};

export default MuiTest;
