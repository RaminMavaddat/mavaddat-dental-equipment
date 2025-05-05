import { useNavigate } from "react-router-dom";
import "./card.css";

interface Props {
  header: string;
  name: string;
  description: string;
  imgUrl: string;
  navigationUrl: string;
}

function Card({ header, name, description, imgUrl, navigationUrl }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <img src={imgUrl} />
        <h1>
          <i className="bi bi-clipboard2"></i>
          {header}
        </h1>
        <h1>{name}</h1>
        <p>{description}</p>
        <button
          className="more-info-btn"
          onClick={() => {
            navigate(navigationUrl);
          }}
        >
          <i className="bi bi-mouse"></i>مشاهده بیشتر
        </button>
      </div>
    </>
  );
}

export default Card;
