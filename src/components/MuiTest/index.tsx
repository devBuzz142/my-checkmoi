import React from 'react';
import { Card } from '@mui/material';

interface MuiTestProps {}

const MuiTest = ({ ...props }: MuiTestProps) => {
  return (
    <Card>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </Card>
  );
};

export default MuiTest;
