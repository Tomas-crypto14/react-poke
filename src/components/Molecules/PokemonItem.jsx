const PokemonItem = ({name}) => {
  return (
        <>
        <img 
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            alt={`${name}`}/>
            <p>{name}</p>
        </>
        );
}

export default PokemonItem