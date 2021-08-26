import styled from 'styled-components';

export const CheckoutStyleWrap = styled.div`
  font-size: 20px;
  column-count: 2;
  column-gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 19px;
  }
  @media (max-width: 576px) {
    font-size: 18px;
  }
  @media (max-width: 425px) {
    font-size: 16px;
    margin: 0 auto 12px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;

export const CheckoutStyleLabel = styled.label`
  display: block;
  cursor: pointer;
`;

export const CheckoutStyleInput = styled.input`
  margin-right: 5px;
  cursor: pointer;
`;
