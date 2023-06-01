import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardPlayer from '../card-player/card-player';

type CardProps = {
  name: string;
  preview: string;
  id: number;
  trailer: string;
}

function Card({name, preview, id, trailer}: CardProps) {
  const [, setActiveCard] = useState(0);
  const [playTrailer, setPlayTrailer] = useState(false);

  function handleTrailerPlay() {
    setPlayTrailer(!playTrailer);
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setActiveCard(id)}>
      <Link to={`/films/${id}`}>
        <div onMouseEnter={handleTrailerPlay} onMouseLeave={handleTrailerPlay} className="small-film-card__image">
          <CardPlayer preview={preview} trailer={trailer} play={playTrailer}/>
        </div>
      </Link>

      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link" >{name}</Link>
      </h3>
    </article>
  );
}

export default Card;
