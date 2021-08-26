import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  color: white;
  font-family: inherit;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  background-color: #299b01;
  border-color: transparent;
  border-radius: 6px;
  width: 250px;
  height: 65px;
  margin: 0 auto;
  padding: 18px 0 17px;
  transition-property: color, background-color, border-color;
  transition-duration: 0.3s;
  &:hover {
    color: #299b01;
    background-color: white;
    border-color: #299b01;
  }
  &:focus {
    outline-style: none;
  }
  &:disabled {
    color: #777;
    background-color: #ccc;
    border-color: #aaa;
  }
  @media (max-width: 576px) {
    width: 230px;
    height: 60px;
    padding: 16px 0 15px;
  }
  @media (max-width: 425px) {
    font-size: 19px;
    width: 200px;
    height: 52px;
    padding: 10px 0 10px;
  }
`;
