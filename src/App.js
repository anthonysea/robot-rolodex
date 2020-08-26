import React, { useState, useEffect } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => setMonsters(json))
  }, [])

  const filteredMonsters = monsters.filter(monster => {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })

  const handleChange = e => {
    setSearchField(e.target.value)
  }

  return (
    <div className='App'>
      <h1>Robot Rolodex</h1>
      <SearchBox placeholder='search robots' handleChange={ e => setSearchField(e.target.value) }/>
      <CardList monsters={ filteredMonsters }/>
    </div>
  );
}

export default App;
