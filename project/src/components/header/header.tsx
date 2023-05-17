import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { locationToClassMap } from '../../utils/data';

type HeaderProps = {
  children?: ReactNode;
};

function Header({children}: HeaderProps): JSX.Element {
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
      {children}
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
