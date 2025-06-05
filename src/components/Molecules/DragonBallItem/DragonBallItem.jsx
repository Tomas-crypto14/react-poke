import {useContext} from "react";
import {ThemeContext} from "../../../contexts/ThemeContext";
import "./DragonBallItem.scss"
const DragonBallItem = ({name, img}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div onClick={() => setTheme("dark")} className={"characterItem"}>
        <img src={img} alt={`${name}.png`}/>
        <p>{theme}</p>
    </div>
    
  )
}

export {DragonBallItem}