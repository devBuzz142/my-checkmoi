import React, { ReactNode } from 'react';
import * as S from './style';
import { TopBar } from '../../components';

interface PageTemplateProps {
  children?: ReactNode;
  pageName?: string;
}

const PageTemplate = ({ children, pageName }: PageTemplateProps) => {
  return (
    <S.PageContainer className={pageName ? pageName : ''}>
      <TopBar />
      <S.ContentContainer>{children}</S.ContentContainer>
      {/* <footer /> */}
    </S.PageContainer>
  );
};

export default PageTemplate;
