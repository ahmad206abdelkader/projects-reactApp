import React, { useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);


  const toogleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toogleParagraphHandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
