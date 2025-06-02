import Pokemon from "./components/Pokemon"
import Header from "./components/Header"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {useState} from "react"
import './App.css';

function App () {
  return(
  <>
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
