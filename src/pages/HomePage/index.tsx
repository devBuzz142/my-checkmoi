import React from 'react';
import { TopBar } from '../../components';
import PageTemplate from '../PageTemplate';

interface HomePageProps {}

const HomePage = ({ ...props }: HomePageProps) => {
  return <PageTemplate pageName="HomePage"></PageTemplate>;
};

export default HomePage;
