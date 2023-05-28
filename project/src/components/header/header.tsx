import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { locationToClassMap } from '../../utils/data';
import { authorizationSelector, userDataSelector } from '../../store/reducers/authorization';
import { logout } from '../../store/api-actions';
import { AppDispatch } from '../../types/store';

type HeaderProps = {
  children?: ReactNode;
};

function Header({children}: HeaderProps): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const authorized = useSelector(authorizationSelector);
  const userData = useSelector(userDataSelector);
  const currentLocation = useLocation();
  const locationClassNames = Object.entries(locationToClassMap)
    .filter(([location]) => currentLocation.pathname === location)
    .map(([, className]) => className)
    .join(' ');

  function handleLogout() {
    dispatch(logout());
  }

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
      {currentLocation.pathname === '/login' ? null :
        <ul className="user-block">
          { authorized ?
            <>
              <li className="user-block__item">
                <Link to='/mylist'>
                  <div className="user-block__avatar">
                    <img src={userData?.avatarUrl} alt="User avatar" width="63" height="63" />
                  </div>
                </Link>
              </li>
              <li className="user-block__item">
                <button onClick={handleLogout} style={{border: 'none', background: 'none'}} className="user-block__link">Sign out</button>
              </li>
            </> :
            <li className="user-block__item">
              <Link className="user-block__link" to='/login'>Sign in</Link>
            </li>}
        </ul>}
    </header>
  );
}
export default Header;
