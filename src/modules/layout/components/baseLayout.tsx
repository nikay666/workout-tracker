import React from 'react';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledPaper = styled(Paper)({
  height: '100%',
});

const BaseLayout: React.FC<Props> = ({ className, children }) => {
  return (
    <StyledPaper elevation={0} square className={className}>
      {children}
    </StyledPaper>
  );
};

export default BaseLayout;
