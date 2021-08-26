import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  @media (max-width: 768px) {
    top: 40px;
  }
`;

export const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    line-height: 35px;
    margin-bottom: 25px;
  }
  @media (max-width: 425px) {
    font-size: 27px;
  }
`;

export const Total = styled.div`
  font-size: 20px;
  display: flex;
  margin: 15px 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
  @media (max-width: 768px) {
    margin: 25px 35px 30px;
  }
  @media (max-width: 425px) {
    font-size: 19px;
  }
  @media (max-width: 320px) {
    font-size: 17px;
  }
`;

export const TotalPrice = styled.span`
  font-size: 20px;
  text-align: right;
  min-width: 107px;
  margin-left: 20px;
  @media (max-width: 425px) {
    font-size: 19px;
  }
  @media (max-width: 320px) {
    font-size: 17px;
    min-width: 87px;
  }
`;
