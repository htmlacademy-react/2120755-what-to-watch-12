import { useSelector } from 'react-redux';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SignInForm from './components/signin-form';
import NotAvailible from '../../components/not-available/not-available';
import { filmsSelector, promoFilmSelector } from '../../store/reducers/films';

function SignIn(): JSX.Element {
  const promo = useSelector(promoFilmSelector);
  const films = useSelector(filmsSelector);

  if (!promo && films.length === 0) {
    return <NotAvailible/>;
  }

  return (
    <div className="user-page">
      <Header/>
      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>
      <Footer/>
    </div>
  );
}
export default SignIn;
