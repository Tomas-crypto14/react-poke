//import {PokemonList} from "./components/Organisms/PokemonList"
import Pokemon from "./components/Pokemon"
import Header from "./components/Header"
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList"
import { DragonBallList } from "./components/Organisms/PokemonList/DragonBallList"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react"
import {MainLayout} from "./components/Templates/MainLayout/MainLayout";
import './App.scss';

function App () {
  return(
  <>
  <h1>Pokedex</h1>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/PokemonList" element={<PokemonList/>}/>
      <Route path="/Pokemon" element={<Pokemon/>}/>
      <Route path="/" element={<MainLayout leftContent={<h1><DragonBallList/></h1>} rightContent={<PokemonList/>}/>}/>
    </Routes>
  </BrowserRouter>
  
  </>
  )
};

export default App;
