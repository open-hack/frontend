import React from 'react';

import Header from './Component/Header'
import Main from './Component/Main';

import logo from './assets/img/logo.svg'
import arrowDown from './assets/img/arrow-down.svg'
import image1 from './assets/img/image1.png'

import './App.css';
import SideBySide from './Component/SideBySide';
import CoverImage from './Component/CoverImage';
import Button from './Component/Button';
import Text from './Component/Text';
import InputText from './Component/InputText';
import ClickableOpacity from './Component/ClickableOpacity';

function App() {
  return (
    <div className="App">
      <Header leftComponent={<img src={logo} />} rightComponent={<p style={{color:"white"}}>Menu <img src={arrowDown} /></p>} />
      <Main>
        <SideBySide leftContent={<CoverImage image={image1}><img src={logo} /></CoverImage>} rightContent={<div><Text color="#F9314E" size={48}><strong>Junda!</strong></Text><Text><b>Hello</b> guys!</Text><InputText label="Email" onChangeText={console.log} /><InputText label="Senha" type="password" onChangeText={console.log} /><Button title="Sign up" /><ClickableOpacity onClick={()=>{console.log("junda")}}><Text>Jundou!</Text></ClickableOpacity></div>} />
      </Main>
    </div>
  );
}

export default App;
