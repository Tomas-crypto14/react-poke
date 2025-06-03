import {useEffect} from "react";
const PokemonList = () => {
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, []);
  return (
    <div>PokemonList</div>
    )
}

export {PokemonList}