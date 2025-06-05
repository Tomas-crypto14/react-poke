//En el Organisms, la información extraída de la carpeta Molecules será enviada al mapeo de Pokemons
//para que pueda leer el nombre de los pokeons y obtener su imagen, se recuerda que la etiqueta
//PokemonItem solo puede enviar datos dependiendo del parametro que hayamos puesto en la funcion

import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {PokemonItem} from "../../Molecules/PokemonItem/PokemonItem"
import { useFetchPokemonsData } from "../../../hooks/useFetchPokemonData"
import "./PokemonList.scss"
const PokemonList = () => {
    const {pokemons, loading} = useFetchPokemonsData({
    url: `https://pokeapi.co/api/v2/pokemon?limit=1500`, 
    resultsAttribute: "results"
    });
    const {theme} = useContext(ThemeContext);
  return (
    <div>
        <h2>Pokemon List</h2>
        <div className="pokemonsContainer">
        {pokemons.map((pokemon, index) => (<PokemonItem name={pokemon.name} key={index}/>
    ))}
        </div>
    </div>
    )
}

export {PokemonList}