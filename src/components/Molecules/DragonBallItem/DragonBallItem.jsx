//import "./DragonBallItem.scss"
const DragonBallItem = ({name, image}) => {
  return (
    <div>
    <img
        src={`image":"https://dragonball-api.com/characters/${image}.webp`}
        alt={`${name}`}/>
        <p>{name}</p>
        <p>{image}</p>
    </div>
    
  )
}

export {DragonBallItem}