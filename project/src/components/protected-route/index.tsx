import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
element: JSX.Element;
loggedIn: boolean;
}

function ProtectedRoute({element, loggedIn}: ProtectedRouteProps) {
  return loggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace />
  );
}

export default ProtectedRoute;
