import React, { ReactNode } from 'react';
import * as S from './style';
import { TopBar } from '../../components';

interface PageTemplateProps {
  children?: ReactNode;
  pageName?: string;
  contentCenter?: boolean;
}

const PageTemplate = ({
  children,
  pageName,
  contentCenter = false,
}: PageTemplateProps) => {
  return (
    <S.PageContainer className={pageName ? pageName : ''}>
      <TopBar />
      <S.ContentContainer contentCenter={contentCenter}>
        {children}
      </S.ContentContainer>
      {/* <footer /> */}
    </S.PageContainer>
  );
};

export default PageTemplate;
