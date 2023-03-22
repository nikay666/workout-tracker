import React from 'react';

import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { theme } from '~/theme';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledPaper = styled(Paper)({
  minHeight: '100%',
});

const BaseLayout: React.FC<Props> = ({ className, children }) => {
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledPaper elevation={0} square className={className}>
      <Container maxWidth={matchesSm ? 'sm' : 'lg'}>{children}</Container>
    </StyledPaper>
  );
};

export default BaseLayout;
