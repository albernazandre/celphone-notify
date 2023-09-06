import React from 'react';
import './App.css';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import testLogo from './assets/logo.png';

function App() {
  return (
    <div className="App">

      <Screen1
        title="Que tal aproveitar..."
        description="Coquinha gelada para todos hehehe"
      />

      <Screen2
        barText='Olha o desconto'
        logo={testLogo}
        pageTitle="Vai uma coquinha?"
        notificationTitle="Mock Title 2"
        notificationDescription="Você merece um passeio para as ilhas Cayman. Se alguém disser que você foi, só negue."
        code="ABC123"
        discountRules="Se você quiser 10% de desconto, terá de pedir ao Seu Juvenal, tomador de cachaça e bom de prosa."
        buttonText="Peça o seu!"
        buttonLink="https://www.example.com"
      />
    </div>
  );
}

export default App;
