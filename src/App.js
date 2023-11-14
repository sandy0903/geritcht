import React from 'react';
import { AboutUs, Chef, Footer, Gallery, Header, SpecialMenu,Reservation,Customers } from './container';
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
    <Footer />
  </div>
);

export default App;
