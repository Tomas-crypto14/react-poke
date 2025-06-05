import {useState, useEffect, useContext} from "react";
import axios from "axios";
import {ThemeContext} from "../../../contexts/ThemeContext";
import { DragonBallItem } from "../../Molecules/DragonBallItem/DragonBallItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData"
import "./DragonBallList.scss";
const DragonBallList = () => {
     const {characters, loading} = useFetchCharactersData({
        url: `https://dragonball-api.com/api/characters?limit=1000`,
        resultsAttribute: "items"
     });
     const {theme} = useContext(ThemeContext);

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