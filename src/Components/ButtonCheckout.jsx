import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  color: white;
  font-size: 21px;
  line-height: 25px;
  background-color: #299b01;
  border-color: transparent;
  border-radius: 6px;
  width: 250px;
  height: 65px;
  margin: 0 auto;
  padding: 19px 78px 17px;
  transition-property: color, background-color, border-color;
  transition-duration: 0.4s;
  &:hover {
    color: #299b01;
    background-color: white;
    border-color: #299b01;
  }
  &:focus {
    outline-style: none;
  }
`;
