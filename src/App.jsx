//import {PokemonList} from "./components/Organisms/PokemonList"
import Pokemon from "./components/Pokemon"
import Header from "./components/Header"
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList"
import { DragonBallList } from "./components/Organisms/DragonBallList/DragonBallList"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react"
import {MainLayout} from "./components/Templates/MainLayout/MainLayout";
import {ThemeContext} from "./components/contexts/ThemeContext"
import './App.scss';

function App () {
  return(
  <ThemeContext.Provider value={"Light"}>
  <h1>Pokedex</h1>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/PokemonList" element={<PokemonList/>}/>
      <Route path="/Pokemon" element={<Pokemon/>}/>
      <Route path="/" element={<MainLayout leftContent={<h1><DragonBallList/></h1>} rightContent={<PokemonList/>}/>}/>
    </Routes>
  </BrowserRouter>
  
  </ThemeContext.Provider>
  )
};

export default App;
