//import {PokemonList} from "./components/Organisms/PokemonList"
import Pokemon from "./components/Pokemon"
import Header from "./components/Header"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react"
import './App.css';

function App () {
  return(
  <>
  <h1>Pokedex</h1>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/Pokemon" element={<Pokemon/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
};

export default App;
