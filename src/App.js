import React, {Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component.jsx'
import {Searchbox} from './components/search-box/search-box.component.jsx'

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  HandlerChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox placeholder='Search Monster' onClick={this.HandlerChange}/>
        <Cardlist monster={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
