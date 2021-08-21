import styled from 'styled-components';
import bannerImg from '../../image/banner.png';

export const Banner = styled.div`
  width: 100%;
  height: 210px;
  background-image: url(${bannerImg});
  background-position: center center;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
