import React from 'react';
import './App.css';

import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Textarea from './components/Textarea/Textarea';

const alertMessage = () => {
  alert('Hello World!');
}

function App() {
  return (
    <div className="app">

      <h1>Assignment 1 - React</h1>
      
      <Button color="green" handleClick={alertMessage}>Click here to show a message!</Button>

      <Card>
        This is my card!
      </Card>

      <Input />

      <Select />

      <Textarea />

    </div>
  );
}

export default App;
