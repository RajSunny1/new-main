import React from 'react';
import './App.css';
import Card from './Card/Card';
import Content from './Content/Content';
import Header from './Header/Header';
import Profile1 from './Profile1/Profile1';
import Profile2 from './Profile2/Profile2';
import Youtubevideo from './Youtubevideo/Youtubevideo';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile1 />
      <Profile2 />
      <Youtubevideo />
      <Content />
      <Card />
     <Footer/>
    </div>
  );
}

export default App;
