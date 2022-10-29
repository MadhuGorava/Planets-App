// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {imageUrl, name, description} = planetsList
  return (
    <div className="list-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planets" />
      <h1 className="heading">{name}</h1>
      <div className="text-container">
        <p className="details">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
