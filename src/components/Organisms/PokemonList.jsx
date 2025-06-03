import {useEffect, useState} from "react";
import axios from "axios";
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
        {pokemons.map((pokemon, index) => {
            return (
            <>
                <img src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}/>
                <p key={index}>{pokemon.name}</p>
            </>
            )
        })}
    </div>
    )
}

export {PokemonList}