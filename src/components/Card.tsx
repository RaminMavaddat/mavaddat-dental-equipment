import "./card.css";

interface Props {
  description: string;
  imgUrl: string;
}

function Card({ description, imgUrl }: Props) {
  return (
    <div className="card">
      <p>{description}</p>

      <img src={imgUrl} />
    </div>
  );
}

export default Card;
