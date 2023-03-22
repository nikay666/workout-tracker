import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BannerProps, BannerSizes } from '~/components/Banner';
import BannerList from '~/components/BannerList';
import { BaseLayout } from '~/modules/layout';

import { theme } from '~/theme';

//https://i.pinimg.com/564x/93/25/2b/93252bcc25b3a3fb6c2c606fc14fdd94.jpg
//https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg
//https://i.pinimg.com/564x/17/df/39/17df393828f6b3055be366b077d4ac88.jpg
//https://i.pinimg.com/564x/ab/01/9a/ab019a1dbc2a081011697019d2af24a9.jpg

const banners: BannerProps[] = [
  {
    id: '1',
    title: 'Тренировка на все тело',
    description: '',
    image:
      'https://i.pinimg.com/564x/a7/d6/8d/a7d68d2ad9b3398c96993ec71ee7d85d.jpg',
    tags: [],
  },
  {
    id: '2',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/ab/01/9a/ab019a1dbc2a081011697019d2af24a9.jpg',
    tags: [],
  },
  {
    id: '3',
    title: 'Тренировка на ягодицы и ляшки',
    description: '',
    image:
      'https://i.pinimg.com/564x/93/25/2b/93252bcc25b3a3fb6c2c606fc14fdd94.jpg',
    tags: [],
  },
  {
    id: '4',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg',
    tags: [],
  },
];

const bigBanners: BannerProps[] = [
  {
    id: '1',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg',
    tags: [],
    size: BannerSizes.big,
  },
  {
    id: '1',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg',
    tags: [],
    size: BannerSizes.big,
  },
];

const smallBanners: BannerProps[] = [
  {
    id: '1',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg',
    tags: [],
    size: BannerSizes.small,
  },
  {
    id: '1',
    title: 'Тренировка на ягодицы',
    description: '',
    image:
      'https://i.pinimg.com/564x/7b/98/2e/7b982e3878e6e6e75376006ce83b2956.jpg',
    tags: [],
    size: BannerSizes.small,
  },
];

const HomePageLayout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
});

const HomePage = () => {
  return (
    <BaseLayout>
      <HomePageLayout>
        <Typography variant="h5">Мои тренировки</Typography>
        <BannerList title="Любимые тренировки" banners={banners} />
        <BannerList title="Последние трениировки" banners={bigBanners} />
        <BannerList title="Последние трениировки" banners={smallBanners} />
      </HomePageLayout>
    </BaseLayout>
  );
};

export default HomePage;
