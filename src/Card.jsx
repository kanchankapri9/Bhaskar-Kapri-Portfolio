import "./card.css";

function Card({ imgSrc, title, description, DemoLink, CodeLink }) {
  return (
    <div className="card">
      <div className="img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="descriptionbox">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href={DemoLink} className="btn" target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={CodeLink} className="btn" target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
}

export default Card;
