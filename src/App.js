import React from 'react';
import {NavBar} from "./components/navbar/NavBar";
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import AppStyle from './App.module.scss';

function App() {
  return (
    <div className={AppStyle.universalStyle}>
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
