import React from 'react';

import CheckIcon from '@mui/icons-material/Check';

import { Day } from '../../types';
import { StyledDay } from './style';

const WeekBarDay: React.FC<Day> = ({ data, complete }) => {
  return (
    <StyledDay complete={complete}>{complete ? <CheckIcon /> : data}</StyledDay>
  );
};

export default WeekBarDay;
