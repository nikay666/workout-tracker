import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

export const StyledBanerList = styled('div')({
  overflow: 'scroll',
});

export const StyledBanerListContainer = styled(Stack)({
  width: 'fit-content',
});

export const StyledHeader = styled(Stack)({
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexDirection: 'row',
  marginBottom: theme.spacing(2),
});

export const StyledTitle = styled(Typography)({
  textTransform: 'uppercase',
});
