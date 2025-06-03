import {useEffect, useState} from "react";
import axios from "axios";
import {PokemonItem} from "../Molecules/PokemonItem"
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((data) => data.data)
        .then((pokemonList) => {
            console.log(pokemonList)
            setPokemons(pokemonList.results)
        })
    }, []);
  return (
    <div>
        <h2>PokemonList</h2>
        {pokemons.map((pokemon, index) => (<PokemonItem name={pokemon.name} key={index}/>
    ))}
    </div>
    )
}

export {PokemonList}