import { filmNavigationOptions } from '../../../utils/data';

type TabsProps = {
  onTabClick: (option: string) => void;
  activeTab: string | null;
};

function FilmNavigation({ onTabClick, activeTab = 'overview' }: TabsProps): JSX.Element {
  function handleTabClick(option: string) {
    onTabClick(option.toLowerCase());
  }

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {filmNavigationOptions.map((option) =>
          (
            <li onClick={() => handleTabClick(option)} className={`film-nav__item ${activeTab === option.toLowerCase() ? 'film-nav__item--active' : ''}`} key={option}>
              <button className="film-nav__link" style={{backgroundColor: 'transparent', border: 'none'}}>{option}</button>
            </li>))}
      </ul>
    </nav>
  );
}
export default FilmNavigation;

