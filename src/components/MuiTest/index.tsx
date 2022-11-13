import React from 'react';
import { InputBase } from '@mui/material';

interface MuiTestProps {}

const MuiTest = ({ ...props }: MuiTestProps) => {
  return <InputBase color="primary" />;
};

export default MuiTest;
