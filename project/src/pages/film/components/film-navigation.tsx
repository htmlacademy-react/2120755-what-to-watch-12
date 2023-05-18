import { useState } from 'react';
import { filmNavigationOptions } from '../../../utils/data';

type TabsProps = {
  onTabClick: (option: string) => void;
};

function FilmNavigation({ onTabClick }: TabsProps): JSX.Element {
  const [isActive, setIsActive] = useState('Overview');

  function handleTabClick(option: string) {
    setIsActive(option);
    onTabClick(option);
  }

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {filmNavigationOptions.map((option) =>
          (
            <li onClick={() => handleTabClick(option)} className={`film-nav__item ${isActive === option ? 'film-nav__item--active' : ''}`} key={option}>
              <button className="film-nav__link" style={{backgroundColor: 'transparent', border: 'none'}}>{option}</button>
            </li>))}
      </ul>
    </nav>
  );
}
export default FilmNavigation;

