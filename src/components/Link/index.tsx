import React from 'react';
import { LinkProps, Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

interface Props extends LinkProps {
  classNames?: string;
}

const StyledLink = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  fontSize: theme.typography.caption.fontSize,
});

const Link: React.FC<Props> = ({ className, children, ...props }) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default Link;
