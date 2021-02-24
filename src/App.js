import React from "react";
import Pokecard from "./Pokecard.js";
import Pokedex from "./Pokedex.js"
import pokemon from "./Pokemon.js"
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
