import React from 'react';
import { Card, CardContent } from '@mui/material';

interface MuiTestProps {}

const MuiTest = ({ ...props }: MuiTestProps) => {
  return (
    <Card>
      <CardContent>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
        <div>hello</div>
      </CardContent>
    </Card>
  );
};

export default MuiTest;
