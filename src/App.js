import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: 'AIzaSyC1d_eZtHvByPGb7hZ0K30AvGfhKSPKydQ',
  authDomain: 'mrdonaldz.firebaseapp.com',
  databaseURL: 'https://mrdonaldz-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mrdonaldz',
  storageBucket: 'mrdonaldz.appspot.com',
  messagingSenderId: '964759099369',
  appId: '1:964759099369:web:1c5f24db1dd58a61cd5d78',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();

  useTitle(openItem.openItem);

  return (
    <Context.Provider
      value={{ auth, openItem, orders, orderConfirm, firebaseDatabase: firebase.database }}
    >
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
}

export default App;
