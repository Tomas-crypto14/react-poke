import {useEffect} from "react";
import axios from "axios";
const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((data) => data.data)
        .then((pokemonList) => {
            setPokemons(pokemonList)
        })
    }, []);
  return (
    <div>
        <h2>PokemonList</h2>
        {pokemons.map((pokemon) => {
            return <p>{pokemon.name}</p>
        })}
    </div>
    )
}

export {PokemonList}