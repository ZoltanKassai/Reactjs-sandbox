import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [ personsState, setPersonsState ] = useState({
        persons: [
            {name:'argsgs', age:'47'},
            {name:'xzdgfsv', age:'42'},
            {name:'zvddfv', age:'12'}
        ]
    });

    const [otherState, setOtherState] = useState('other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
        setPersonsState( {
            persons: [
                {name:'dagf', age:'147'},
                {name:'dfgs', age:'142'},
                {name:'xfvbfv', age:'112'}
            ],
            otherState: personsState.otherState
        });
    };

    return (
      <div className='App'>
          <h1>React</h1>
          <p>Works!</p>
          <button onClick={switchNameHandler}>Switch name</button>
          <Person
              name={personsState.persons[0].name}
              age={personsState.persons[0].age}
          />
          <Person
              name={personsState.persons[1].name}
              age={personsState.persons[1].age}
          >
              My Hobbies Racing
          </Person>
          <Person
              name={personsState.persons[2].name}
              age={personsState.persons[2].age}
          />
      </div>
    );
}

export default App;
