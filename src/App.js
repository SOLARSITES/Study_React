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

  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} firebaseDatabase={firebase.database} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
