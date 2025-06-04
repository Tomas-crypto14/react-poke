//import "./DragonBallItem.scss"
const DragonBallItem = ({name, image}) => {
  return (
    <div className="characterItem">
        <p>{name}</p>
        <img src={image} alt={`Image of ${name}`}/>
    </div>
    
  )
}

export {DragonBallItem}