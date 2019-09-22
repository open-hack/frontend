import React from 'react';

import Header from './Components/Header'
import Main from './Components/Main';

import logo from './assets/img/logo.svg'
import arrowDown from './assets/img/arrow-down.svg'
import image1 from './assets/img/image1.png'

import './App.css';
import SideBySide from './Components/SideBySide';
import CoverImage from './Components/CoverImage';
import Button from './Components/Button';
import Text from './Components/Text';
import InputText from './Components/InputText';

function App() {
  return (
    <div className="App">
      <Header leftComponent={<img src={logo} />} rightComponent={<p style={{color:"white"}}>Menu <img src={arrowDown} /></p>} />
      <Main>
        <SideBySide leftContent={<CoverImage image={image1}><img src={logo} /></CoverImage>} rightContent={<div><Text><b>Hello</b> guys!</Text><InputText label="Email" onChangeText={console.log} /><InputText label="Senha" type="password" onChangeText={console.log} /><Button title="Sign up" /></div>} />
      </Main>
    </div>
  );
}

export default App;
