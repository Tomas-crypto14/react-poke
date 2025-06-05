import "./PokemonItem.scss";
import {useContext} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext";
//En el molecules, se hace una función para coger la imagen de los nombres de los Pokemon en el PokemonList
//del componente PokemonList de Organisms
const PokemonItem = ({name}) => {
  const {theme} = useContext(ThemeContext);
  return (
        <div className={`pokemonItemContainer${theme == "dark" ? "-dark" : ''}`}>
        <img 
            src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`}
            alt={`${name}`}/>
            <p className={`itemText${theme == "dark" ? "-dark" : ''}`}>{name}</p>
        </div>
        );
}

export {PokemonItem}