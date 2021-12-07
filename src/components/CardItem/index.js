// Write your code here.
const CardItem = props => {
  const {cardDetails} = props
  const {id, title, description, imgUrl, className} = cardDetails

  return (
    <li>
      <div>
        <div className="card-container">
          <h1 className="main-heading">{title}</h1>
          <p>{description}</p>
          <div className="img-container">
            <img src={imgUrl} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default CardItem
