import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
      <div className='App'>
          <h1>React</h1>
          <p>Works!</p>
          <Person name='Zoli' age='47'/>
          <Person name='Dommi' age='42'>My Hobbies Racing </Person>
          <Person name='Atti' age='12'/>
      </div>
    );
}

export default App;
