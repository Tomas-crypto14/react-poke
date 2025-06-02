import {useEffect, useState} from "react"
const Pokemon = () => {
    const [pokemons, setPokemon] = useState([]);
    const [filteredPokemons, setFilteredPokemon] = useState([]);

    const [search, setSearch] = useState([]);
    //Se tiene que hacer una función async con un mapeo de data.results con fetch
    const fetchPokemonDetails = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1300`);
        const data = await res.json();
        const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
        })
        );
    setPokemon(detailedPokemons);
    setFilteredPokemon(detailedPokemons);
  };
  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearch(value);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemon(filtered);
  };
  useEffect(() => {
    fetchPokemonDetails();
  }, []);
        
      return (
        <div>
          <h2>Pokemon</h2>
          <input type="search" value={search} placeholder="Busqueda" onChange={handleInputChange}/>
          {filteredPokemons.map((pokemon)=> {//Return secundario
           return (<div key = {pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            </div>
            )
          })}

          {/*filteredSprites.map((pokemon) => {
            return (<img key = {pokemon.sprites}></img>)
          })*/}
        </div>
      )
}

export default Pokemon