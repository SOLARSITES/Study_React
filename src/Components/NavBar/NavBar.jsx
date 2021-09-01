import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import loginImg from '../../image/login.svg';
import logoutImg from '../../image/logout.svg';
import { Context } from '../Functions/context';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 98;
`;

const NavBarStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  background-color: #299b01;
  width: 100%;
  height: 80px;
  padding: 15px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.25);
  @media (max-width: 275px) {
    justify-content: center;
    padding: 0 0 0 14px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 55px;
  @media (max-width: 576px) {
    width: 50px;
  }
  @media (max-width: 275px) {
    display: none;
  }
`;

const H1 = styled.h1`
  font-size: 28px;
  margin-left: 15px;
  @media (max-width: 576px) {
    font-size: 22px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const Figure = styled.figure`
  color: white;
  font-size: 14px;
  margin: 0;
`;

const LoginImg = styled.img`
  width: 32px;
  height: 32px;
  @media (max-width: 576px) {
    width: 26px;
    height: 26px;
  }
`;

const LogoutImg = styled.img`
  width: 25px;
  height: 25px;
  margin: 0 -1px 0 15px;
  cursor: pointer;
`;

const Login = styled.button`
  color: white;
  font-size: 14px;
  background-color: transparent;
  border-style: none;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <HeaderWrapper id="header-wrapper">
      <NavBarStyled>
        <Logo>
          <LogoImg src={logoImg} alt="Logo" />
          <H1>MrDonaldz&reg;</H1>
        </Logo>
        {authentication ? (
          <User>
            <Figure>
              <LoginImg src={loginImg} alt={authentication.displayName} />
              <figcaption>{authentication.displayName}</figcaption>
            </Figure>
            <LogoutImg src={logoutImg} alt="Выйти" onClick={logOut} />
          </User>
        ) : (
          <Login onClick={logIn}>
            <Figure>
              <LoginImg src={loginImg} alt="Войти" />
              <figcaption>Войти</figcaption>
            </Figure>
          </Login>
        )}
      </NavBarStyled>
    </HeaderWrapper>
  );
};
