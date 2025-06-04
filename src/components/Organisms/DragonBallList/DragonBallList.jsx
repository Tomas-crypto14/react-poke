import {useState, useEffect} from "react";
import axios from "axios";
import { DragonBallItem } from "../../Molecules/PokemonItem/DragonBallItem";
import "./DragonBallList.scss";
const DragonBallList = () => {
     const [DragonBall, setDragonBall] = useState([]);
    useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters?limit=1000`)
        .then((data) => data.data)
        .then((DragonBallList) => {
            console.log(DragonBallList)
            setDragonBall(DragonBallList.items)
        })
    }, []);

  return (
    <div>
        <h2>DragonBallList</h2>
        <div className="DragonBallContainer">
        {DragonBall.map((fighter, index) => (<DragonBallItem name={fighter.name} description={fighter.description} key={index}/>
    ))}
        </div>
    </div>
    )
}

export {DragonBallList}