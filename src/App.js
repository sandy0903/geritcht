import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, SpecialMenu,Reservation,Customers } from './container';
import './App.css';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appWrapper}>
    <Header />
    <AboutUs />
    <Reservation/>
    <SpecialMenu />
    <Chef />
    <Customers/>
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
