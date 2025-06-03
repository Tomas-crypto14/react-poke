import "./PokemonItem.scss" 
//En el molecules, se hace una función para coger la imagen de los nombres de los Pokemon en el PokemonList
//del componente PokemonList de Organisms
const PokemonItem = ({name}) => {
  return (
        <div className="pokemonItemContainer">
        <img 
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            alt={`${name}`}/>
            <p>{name}</p>
        </div>
        );
}

export {PokemonItem}