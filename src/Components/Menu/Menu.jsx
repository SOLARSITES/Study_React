import React from 'react';
import styled from 'styled-components';
import { Banner } from './Banner';
import { ListItem } from './ListItem';
import { useFetch } from '../Hooks/useFetch';
import loadImg from '../../image/load.svg';
import errorImg from '../../image/error.png';

const MenuStyled = styled.section`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
  width: calc(100% - 380px);
  height: calc(100% - 80px);
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const SectionMenu = styled.div`
  padding: 30px 0 30px 30px;
`;

const MenuTitle = styled.h2`
  font-size: 32px;
  @media (max-width: 425px) {
    font-size: 30px;
  }
`;

const LoadStatus = styled.div`
  text-align: center;
  padding: 25px 25px 1005px 25px;
`;

export const Menu = () => {
  const res = useFetch();
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
        <>
          <SectionMenu>
            <MenuTitle>Бургеры</MenuTitle>
            <ListItem itemList={dbMenu.burger} />
          </SectionMenu>
          <SectionMenu>
            <MenuTitle>Закуски / Напитки</MenuTitle>
            <ListItem itemList={dbMenu.other} />
          </SectionMenu>
        </>
      ) : res.error ? (
        <LoadStatus>
          <img src={errorImg} alt="Ошибка загрузки данных!" />
        </LoadStatus>
      ) : (
        <LoadStatus>
          <img src={loadImg} alt="Загрузка данных..." />
        </LoadStatus>
      )}
    </MenuStyled>
  );
};
