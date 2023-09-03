import './index.css'

const DestinationCard = props => {
  const {each} = props
  const {image, location, name, rating} = each
  console.log(image)
  return (
    <div className="destination-card">
      <div
        style={{backgroundImage: `url(${image})`}}
        className="destination-image-card"
      >
        <div className="destinations-btn">
          <button className="rating" type="button">
            ⭐{rating}
          </button>
          <button className="exclusive" type="button">
            EXCLUSIVE
          </button>
        </div>
      </div>
      <h3>{name}</h3>

      <p>{location}</p>
      <button type="button" className="dot-btn">
        ...
      </button>
    </div>
  )
}

export default DestinationCard
