import axios from "axios";
import {useState, useEffect} from "react"

const useFetchCharactersData = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
     useEffect(() => {
        axios.get(`https://dragonball-api.com/api/characters?limit=1000`)
        .then((res) => res.data)
        .then((characterList) => {
            setLoading(false)
            setCharacters(characterList.items)
        })
    }, []);
  return {characters, loading};
}

export {useFetchCharactersData}