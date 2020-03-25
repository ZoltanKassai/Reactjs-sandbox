import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name:'argsgs', age:47},
            {name:'xzdgfsv', age:42},
            {name:'zvddfv', age:12}
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked');
        this.setState( {
            persons: [
                {name:newName, age:147},
                {name:'dfgs', age:142},
                {name:'xfvbfv', age:112}
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState( {
            persons: [
                {name:'dvzxv', age:147},
                {name: event.target.value, age:142},
                {name:'xfvbfv', age:112}
            ]
        })
    }

    render() {
        return (
          <div className='App'>
              <h1>React</h1>
              <p>Works!</p>
              <button onClick={this.switchNameHandler.bind(this, 'Yoyya')}>Switch name</button>
              <Person
                  name={this.state.persons[0].name}
                  age={this.state.persons[0].age}
              />
              <Person
                  name={this.state.persons[1].name}
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, 'Yoyya!')}
                  changed={this.nameChangeHandler}
              >
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
