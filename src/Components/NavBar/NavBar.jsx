import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  color: white;
  background-color: #299b01;
  width: 100%;
  height: 80px;
  padding: 15px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  color: white;
  font-size: 14px;
  background-color: transparent;
  border-style: none;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Logo" />
      <H1>MrDonald&apos;s&reg;</H1>
    </Logo>
    <Login>
      <img src={signImg} alt="Войти" />
      <p>Войти</p>
    </Login>
  </NavBarStyled>
);
