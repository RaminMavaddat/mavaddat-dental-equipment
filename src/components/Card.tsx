import "./card.css";

interface Props {
  description: string;
  imgUrl: string;
}

function Card({ description, imgUrl }: Props) {
  console.log(description);

  return (
    <div className="card">
      <img src={imgUrl} />
      <h1>this is my first header</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque amet
        quasi nihil ratione perspiciatis vero rerum maxime aut ipsam.
        Perferendis quaerat expedita laborum pariatur quae veniam molestiae
        incidunt minima corrupti?Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Molestias, adipisci ex ipsam quisquam esse numquam
        delectus aperiam cupiditate iste laudantium ducimus facilis nostrum
        consequatur aut magni sequi qui placeat ad architecto doloribus possimus
        tempora voluptate sed enim. Reprehenderit sit iusto beatae quia?
        Voluptates quasi pariatur natus in vel aperiam exercitationem.
      </p>
      <button className="more-info-btn">مشاهده بیشتر</button>
    </div>
  );
}

export default Card;
