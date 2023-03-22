import { Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

export const StyleCard = styled(Card)({
  cursor: 'pointer',
  position: 'relative',
  padding: theme.spacing(2),
  display: 'flex',
  alignItems: 'flex-end',
});

export const StyledBackground = styled('img')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: 0,
  filter: 'brightness(0.6)',
});

export const StyledTitle = styled(Typography)({
  position: 'relative',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  zIndex: 2,
});
