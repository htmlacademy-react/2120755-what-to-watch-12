import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import SignInForm from './components/signin-form';

function SignIn(): JSX.Element {
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
