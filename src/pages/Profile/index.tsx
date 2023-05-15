import React from 'react';

import { Avatar, MenuItem, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/system';

import GoalCard from '~/components/GoalCard';
import { BaseLayout } from '~/modules/layout';

import { theme } from '~/theme';
import { WeightGoal } from '~/types';

const goal: WeightGoal = {
  goal: 55,
  current: 63,
  initial: 65,
};

interface Props {
  className?: string;
}

const Title = styled(Typography)({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(4),
});

const Block = styled(Stack)({
  marginTop: theme.spacing(8),
});

const StyledP = styled(Typography)({
  marginTop: theme.spacing(4),
});

const StyledInput = styled(TextField)({
  width: '30%',
});

const StyledRow = styled('div')({
  display: 'flex',
  gap: theme.spacing(4),
  margin: `${theme.spacing(4)}  0`,
});

const wieightUnits = [
  {
    value: 'kg',
    label: 'kg',
  },
  {
    value: 'lb',
    label: 'lb',
  },
];

const heightUnits = [
  {
    value: 'cm',
    label: 'cm',
  },
  {
    value: 'ft',
    label: 'ft',
  },
];

const ProfilePage: React.FC<Props> = ({ className }) => {
  return (
    <BaseLayout>
      <Typography variant="h5">Мой профиль</Typography>
      <Block alignItems="center">
        <Avatar sx={{ width: 64, height: 64 }} />
        <StyledP>Name</StyledP>
      </Block>
      <Title variant="h6">Мои параметры</Title>

      <StyledRow>
        <StyledInput type="number" placeholder="Вес" />
        <StyledInput select label="Единицы">
          {wieightUnits.map(unit => (
            <MenuItem key={unit.value} value={unit.value}>
              {unit.label}
            </MenuItem>
          ))}
        </StyledInput>
      </StyledRow>

      <StyledRow>
        <StyledInput type="number" placeholder="Рост" />
        <StyledInput select label="Единицы">
          {heightUnits.map(unit => (
            <MenuItem key={unit.value} value={unit.value}>
              {unit.label}
            </MenuItem>
          ))}
        </StyledInput>
      </StyledRow>

      <Title variant="h6">Моя цель</Title>
      <GoalCard {...goal} />
    </BaseLayout>
  );
};

export default ProfilePage;
