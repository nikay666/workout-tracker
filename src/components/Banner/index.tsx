import React from 'react';

import { Tag } from '~/types';

import { StyleCard, StyledBackground, StyledTitle } from './styles';

export enum BannerSizes {
  small = 'small',
  medium = 'medium',
  big = 'big',
}

export interface BannerProps {
  className?: string;
  id?: string;
  title: string;
  description?: string;
  image?: string;
  tags?: Tag[];
  size?: BannerSizes;
}

const SizeRecord: Record<BannerSizes, { width: number; height: number }> = {
  [BannerSizes.big]: {
    width: 360,
    height: 420,
  },
  [BannerSizes.medium]: {
    width: 240,
    height: 140,
  },
  [BannerSizes.small]: {
    width: 120,
    height: 200,
  },
};

const Banner: React.FC<BannerProps> = ({
  className,
  title,
  description,
  image,
  tags = [],
  size = BannerSizes.medium,
}) => {
  const sizes = SizeRecord[size];

  return (
    <StyleCard sx={{ width: sizes.width, height: sizes.height }}>
      <StyledTitle>{title}</StyledTitle>
      <StyledBackground src={image} />
    </StyleCard>
  );
};

export default Banner;
