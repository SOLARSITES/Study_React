import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  animation: modal-overlay 0.6s alternate ease-in-out;
  @keyframes modal-overlay {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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
  @media (max-width: 385px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
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
  @media (max-width: 385px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 17px;
    min-width: 87px;
  }
`;
