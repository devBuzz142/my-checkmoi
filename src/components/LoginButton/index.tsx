import React from 'react';
import Button from '../base/Button';

interface LoginButtonProps {}

const LoginButton = ({ ...props }: LoginButtonProps) => {
  return (
    <Button variant="contained" color="primary">
      Login
    </Button>
  );
};

export default LoginButton;
