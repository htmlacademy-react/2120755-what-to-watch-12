import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authorizationSelector } from '../../store/reducers/authorization';

type ProtectedRouteProps = {
element: JSX.Element;
}

function ProtectedRoute({element}: ProtectedRouteProps) {
  const loggedIn = useSelector(authorizationSelector);
  return loggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
