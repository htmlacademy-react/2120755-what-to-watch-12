import Footer from '../../components/footer';
import Header from '../../components/header';
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
