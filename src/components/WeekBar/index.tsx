import React from 'react';

import { styled } from '@mui/material/styles';

import { theme } from '~/theme';

import WeekBarDay from './components/WeekBarDay';
import { Day } from './types';

interface Props {
  className?: string;
  days: Day[];
}

const StyledWeekBar = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(4),
});

const WeekBar: React.FC<Props> = ({ className, days }) => {
  return (
    <StyledWeekBar>
      {days.map(({ complete, data }) => (
        <WeekBarDay
          {...{
            key: data,
            complete,
            data,
          }}
        />
      ))}
    </StyledWeekBar>
  );
};

export default WeekBar;
