const Card = ({ title, image, description }) => {
    return (
      <div className="card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        {/* Otros elementos de la tarjeta */}
      </div>
    );
  };
  
  export default Card;