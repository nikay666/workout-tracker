import React, { useEffect, useState } from 'react';

import { Card, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { theme } from '~/theme';
import { WeightGoal } from '~/types';

interface Props extends WeightGoal {
  className?: string;
}

const StyledCard = styled(Card)({
  padding: theme.spacing(4),
  paddingBottom: theme.spacing(8)
});

const StyledRow = styled('div')({
  display: 'flex',
  gap: theme.spacing(4),
  alignItems: 'center',
  marginTop: theme.spacing(2),
});

const StyledLinearProgress = styled(LinearProgress)({
  width: '100%',
});

const calculateProgress = (goal: number, current: number, initial: number) => {
  const total = goal - initial;
  const progress = current - initial;

  const res = (progress / total) * 100;

  return res;
};

const GoalCard: React.FC<Props> = ({ className, current, goal, initial }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculated = calculateProgress(goal, current, initial);
    setProgress(calculated);
  }, [goal, current, initial]);

  return (
    <StyledCard>
      <Typography variant="h6">Текущий: {current} ({progress}%)</Typography>

      <StyledRow>
        <Typography variant="h6">{initial}</Typography>
        <StyledLinearProgress variant="determinate" value={progress} />
        <Typography variant="h6">{goal}</Typography>
      </StyledRow>
    </StyledCard>
  );
};

export default GoalCard;
