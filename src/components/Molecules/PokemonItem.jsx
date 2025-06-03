

const PokemonItem = ({img, name}) => {
  return (
        <>
        <img 
            src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
            alt={`${pokemon.name}`}/>
            <p key={index}>{pokemon.name}</p>
        </>
        );
}

export default PokemonItem