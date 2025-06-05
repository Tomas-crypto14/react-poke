import axios from "axios";
import {useState, useEffect} from "react"

const useFetchPokemonsData = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1500`)
        .then((data) => data.data)
        .then((pokemonList) => {
            setLoading(false);
            console.log(pokemonList)
            setPokemons(pokemonList.results)
        })
    }, []);
  return {pokemons, loading};
}

export {useFetchPokemonsData}