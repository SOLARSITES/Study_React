import styled from 'styled-components';

export const CheckoutStyleWrap = styled.div`
  column-count: 2;
  column-gap: 15px;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 576px) {
    font-size: 16px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
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
