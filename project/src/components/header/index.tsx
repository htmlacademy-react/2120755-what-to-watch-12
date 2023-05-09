import { useLocation } from 'react-router-dom';
import { locationToClassMap } from '../../utils/data';

function Header(): JSX.Element {
  const currentLocation = useLocation();
  const locationClassNames = Object.entries(locationToClassMap)
    .filter(([location]) => currentLocation.pathname === location)
    .map(([, className]) => className)
    .join(' ');

  return (
    <header className={`page-header ${locationClassNames}`}>
      <div className="logo">
        <a className="logo__link" href="/">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      {currentLocation.pathname === '/films/:id/review' ?
        <nav className="breadcrumbs">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
            </li>
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link">Add review</a>
            </li>
          </ul>
        </nav>
        : null}

      {currentLocation.pathname === '/mylist' ?
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        : null}

      {currentLocation.pathname !== '/login' ?
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/sign-in">Sign out</a>
          </li>
        </ul>
        : null}
    </header>
  );
}
export default Header;
