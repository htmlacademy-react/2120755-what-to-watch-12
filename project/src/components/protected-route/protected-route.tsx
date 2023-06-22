import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';
import { authorizationSelector } from '../../store/reducers/authorization';
import { toast } from 'react-toastify';


type ProtectedRouteProps = {
element: JSX.Element;
}

function ProtectedRoute({element}: ProtectedRouteProps) {
  const loggedIn = useSelector(authorizationSelector);

  if (loggedIn === undefined) {
    return <Spinner/>;
  }
  if (loggedIn) {
    return element;
  } else { toast.info('You must be logged in to gain access.', {
    position: toast.POSITION.TOP_CENTER,
    toastId: 3,
    theme: 'dark'
  });
  return <Navigate to="/login" replace />;}
}

export default ProtectedRoute;
