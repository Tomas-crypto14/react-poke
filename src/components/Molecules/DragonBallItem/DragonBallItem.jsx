import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";
import "./DragonBallItem.scss"
const DragonBallItem = ({name, img}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`characterItem  ${theme === "dark" ? "dark" : "light"}`}>
        <p>{theme}</p>
        <img src={img} alt={`Image of ${name}`}/>
    </div>
    
  )
}

export {DragonBallItem}