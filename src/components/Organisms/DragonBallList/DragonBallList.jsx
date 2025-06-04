import {useState, useEffect} from "react";
import axios from "axios";
import { DragonBallItem } from "../../Molecules/DragonBallItem/DragonBallItem";
import "./DragonBallList.scss";
const DragonBallList = () => {
     const [character, setCharacters] = useState([]);
    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters?limit=1000`)
        .then((data) => data.data)
        .then((characterList) => {
            setCharacters(characterList.items)
        })
    }, []);

  return (
    <div>
        <h2>DragonBallList</h2>
        <div className="charactersContainer">
        {character.map((fighter, index) => (<DragonBallItem name={fighter.name} img={fighter.image} key={index}/>
    ))}
        </div>
    </div>
    )
}

export {DragonBallList}