import React from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFirebase } from '../Hooks/useFirebase';
import loadImg from '../../image/load.svg';
import errorImg from '../../image/error.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const ImageWrap = styled.div`
  text-align: center;
  padding: 25px 25px 250px 25px;
`;

export const Menu = ({ setOpenItem, firebaseDatabase }) => {
  const res = useFirebase(firebaseDatabase);
  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner />
      {res.response ? (
        <>
          <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
          </SectionMenu>
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
          </SectionMenu>
        </>
      ) : res.error ? (
        <ImageWrap>
          <img src={errorImg} alt="Ошибка загрузки данных!" />
        </ImageWrap>
      ) : (
        <ImageWrap>
          <img src={loadImg} alt="Загрузка данных..." />
        </ImageWrap>
      )}
    </MenuStyled>
  );
};
