import { filmNavigationOptions } from '../../../utils/data';

function FilmNavigation(): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {filmNavigationOptions.map((option) =>
          (
            <li className="film-nav__item" key={option}>
              <a href="#" className="film-nav__link">{option}</a>
            </li>))}
        {/* <li className="film-nav__item film-nav__item--active">
          <a href="#" className="film-nav__link">Details</a>
        </li> */}
      </ul>
    </nav>
  );
}
export default FilmNavigation;