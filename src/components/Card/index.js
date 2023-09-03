import './index.css'

const Card = props => {
  const {each} = props
  const {title, image, details} = each
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div>
        <h3>{title}</h3>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Card
