import React from 'react';
import Header from './Components/Header';
import FoxGeneratorForm from './Components/FoxGeneratorForm';
import Fox from './Components/Fox';
import './SASS/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <FoxGeneratorForm />
      <Fox />
    </div>
  );
}

export default App;
