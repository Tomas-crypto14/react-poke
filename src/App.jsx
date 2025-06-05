//import {PokemonList} from "./components/Organisms/PokemonList"
import Pokemon from "./components/Pokemon"
import Header from "./components/Header"
import { PokemonList } from "./components/Organisms/PokemonList/PokemonList"
import { DragonBallList } from "./components/Organisms/DragonBallList/DragonBallList"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {MainLayout} from "./components/Templates/MainLayout/MainLayout";
import {ThemeContext} from "./contexts/ThemeContext"
import './App.scss';
import {useState} from "react";

function App () {
  const [theme, setTheme] = useState("light");
  return(
  <ThemeContext.Provider value={{theme, setTheme}}>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/PokemonList" element={<PokemonList/>}/>
      <Route path="/Pokemon" element={<Pokemon/>}/>
      <Route path="/" element={<MainLayout leftContent={<DragonBallList/>} rightContent={<PokemonList/>}/>}/>
    </Routes>
  </BrowserRouter>

  </ThemeContext.Provider>
  )
};

export default App;
