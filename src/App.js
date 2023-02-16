import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import CardList from "./components/cardList/CardList.component";
import SearchBox from "./components/searchBox/SearchBox.component";

const App = () => {
  const [monsters, setMonster] = useState([]);
  const [searchField, setSearchField] = useState("");

  const onSearch = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString);
  };

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  useEffect(() => {
    console.log("componentDidMount");
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        setMonster(users)
      );
      console.log("Moster", setMonster)
  }, []);
  
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onSearchHandler={onSearch}
        placeholder="Search"
        className="search-class"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default App;
