import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

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
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 28px;
  margin-left: 15px;
  @media (max-width: 425px) {
    font-size: 22px;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;

const ImgLogo = styled.img`
  width: 55px;
  @media (max-width: 425px) {
    width: 50px;
  }
  @media (max-width: 240px) {
    display: none;
  }
`;

const Login = styled.button`
  color: white;
  font-size: 14px;
  background-color: transparent;
  border-style: none;
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
  @media (max-width: 425px) {
    width: 26px;
    height: 26px;
  }
`;

const Logout = styled.span`
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0 2px 0 15px;
  cursor: pointer;
`;

export const NavBar = () => {
  const {
    auth: { authentication, logIn, logOut },
  } = useContext(Context);

  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={logoImg} alt="Logo" />
        <H1>MrDonaldz&reg;</H1>
      </Logo>
      {authentication ? (
        <User>
          <Figure>
            <LoginImg src={signImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <Logout title="Выйти" onClick={logOut}>
            &#9658;
          </Logout>
        </User>
      ) : (
        <Login onClick={logIn}>
          <Figure>
            <LoginImg src={signImg} alt="Войти" />
            <figcaption>Войти</figcaption>
          </Figure>
        </Login>
      )}
    </NavBarStyled>
  );
};
