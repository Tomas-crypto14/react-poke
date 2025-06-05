import axios from "axios";
import {useState, useEffect} from "react"

const useFetchCharactersData = ({url, resultsAttribute}) => {
//`https://dragonball-api.com/api/characters?limit=1000`
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
     useEffect(() => {
        axios.get(url)
        .then((res) => res.data)
        .then((characterList) => {
            setLoading(false);
            setCharacters(characterList[resultsAttribute])
        })
    }, []);
  return {characters, loading};
}

export {useFetchCharactersData}