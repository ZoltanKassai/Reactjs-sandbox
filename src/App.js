import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name:'argsgs', age:'47'},
            {name:'xzdgfsv', age:'42'},
            {name:'zvddfv', age:'12'}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = () => {
        console.log('Was clicked');
        this.setState( {
            persons: [
                {name:'dagf', age:'147'},
                {name:'dfgs', age:'142'},
                {name:'xfvbfv', age:'112'}
            ]
        })
    }

    render() {
        return (
          <div className='App'>
              <h1>React</h1>
              <p>Works!</p>
              <button onClick={this.switchNameHandler}>Switch name</button>
              <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}
              />
              <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}>
                  My Hobbies Racing
              </Person>
              <Person
                  name={this.state.persons[2].name}
                  age={this.state.persons[2].age}
              />
          </div>
        );
    }
}

export default App;
