import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

export const StyledDay = styled('div', {
  shouldForwardProp: prop => prop !== 'complete',
})<{ complete: boolean }>(({ complete }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  background: complete ? theme.palette.secondary.main : 'transparent',
  borderRadius: '50%',
  fontWeight: 'bold',
  border: complete ? 'none' : `1px solid ${theme.palette.grey[600]}`,
}));
