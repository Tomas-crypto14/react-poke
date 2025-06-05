import axios from "axios";
import {useState, useEffect} from "react"

const useFetchPokemonsData = ({url, resultsAttribute}) => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
//`https://pokeapi.co/api/v2/pokemon?limit=1500`

    useEffect(() => {
        axios.get(url)
        .then((data) => data.data)
        .then((pokemonList) => {
            setLoading(false);
            console.log(pokemonList)
            setPokemons(pokemonList[resultsAttribute])
        })
    }, []);
  return {pokemons, loading};
}

export {useFetchPokemonsData}