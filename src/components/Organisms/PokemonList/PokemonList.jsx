//En el Organisms, la información extraída de la carpeta Molecules será enviada al mapeo de Pokemons
//para que pueda leer el nombre de los pokeons y obtener su imagen, se recuerda que la etiqueta
//PokemonItem solo puede enviar datos dependiendo del parametro que hayamos puesto en la funcion

import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {ThemeContext} from "../../../contexts/ThemeContext";
import {PokemonItem} from "../../Molecules/PokemonItem/PokemonItem"
import "./PokemonList.scss"
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const theme = useContext(ThemeContext);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
        .then((data) => data.data)
        .then((pokemonList) => {
            console.log(pokemonList)
            setPokemons(pokemonList.results)
        })
    }, []);
  return (
    <div>
        <h2>{theme} Pokemon List</h2>
        <div className={"pokemonsContainer"}>
        {pokemons.map((pokemon, index) => (<PokemonItem name={pokemon.name} key={index}/>
    ))}
        </div>
    </div>
    )
}

export {PokemonList}