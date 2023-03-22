import React from 'react';

import { Typography } from '@mui/material';

import Banner, { BannerProps } from '../Banner';
import Link from '../Link';
import {
  StyledBanerList,
  StyledBanerListContainer,
  StyledHeader,
  StyledTitle,
} from './styles';

interface Props {
  className?: string;
  title: string;
  banners: BannerProps[];
  isShowHeader?: boolean;
  isShowSeeMore?: boolean;
}

const BannerList: React.FC<Props> = ({
  className,
  banners,
  title,
  isShowSeeMore = true,
  isShowHeader = true,
}) => {
  return (
    <div>
      {isShowHeader && (
        <StyledHeader>
          <StyledTitle variant="body2">{title}</StyledTitle>

          {isShowSeeMore && <Link to="/">Смотреть все</Link>}
        </StyledHeader>
      )}

      <StyledBanerList>
        <StyledBanerListContainer direction="row" spacing={4}>
          {banners.map(banner => (
            <Banner
              {...{
                key: banner.id,
                ...banner,
              }}
            />
          ))}
        </StyledBanerListContainer>
      </StyledBanerList>
    </div>
  );
};

export default BannerList;
