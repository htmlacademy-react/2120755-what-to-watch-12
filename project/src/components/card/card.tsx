import { useState } from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
  name: string;
  preview: string;
  id: number;
}

function Card({name, preview, id}: CardProps) {
  const [, setActiveCard] = useState(0);

  return (

    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCard(id)}>

      <div className="small-film-card__image">
        <img src={preview} alt="Bohemian Rhapsody" width="280" height="175" />
      </div>

      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link" >{name}  </Link>
      </h3>

    </article>

  );
}

export default Card;
