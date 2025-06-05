import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {ThemeContext} from "../../../contexts/ThemeContext";
import { DragonBallItem } from "../../Molecules/DragonBallItem/DragonBallItem";
import "./DragonBallList.scss";
const DragonBallList = () => {
     const [characters, setCharacters] = useState([]);
     const {theme} = useContext(ThemeContext);
    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters?limit=1000`)
        .then((res) => res.data)
        .then((characterList) => {
            setCharacters(characterList.items)
        })
    }, []);

  return (
    <div>
        <h2>{theme}</h2>
        <div className={"charactersContainer"}>
        {characters.map((fighter, index) => (<DragonBallItem name={fighter.name} img={fighter.image} key={index}/>
    ))}
        </div>
    </div>
    )
}

export {DragonBallList}