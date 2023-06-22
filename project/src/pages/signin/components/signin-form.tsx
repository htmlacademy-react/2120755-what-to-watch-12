import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../store/api-actions';
import { AppDispatch } from '../../../types/store';
import { authorizationSelector } from '../../../store/reducers/authorization';
import { PASSWORD_PATTERN, EMAIL_PATTERN } from '../../../utils/const';

function SignInForm(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({email: '', password: ''});
  const [isValid, setIsValid] = useState({email: true, password: true});
  const [errorMessage, setErrorMessage] = useState('');
  const authorized = useSelector(authorizationSelector);

  function handleLoginData(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function validateInputs (email: string, password: string) {
    if (!email.match(EMAIL_PATTERN)) {
      setErrorMessage('Please enter a valid email address');
      setIsValid({email: false, password: true});
    }
    else if (!password.match(PASSWORD_PATTERN)) {
      setErrorMessage('Password should contain at least 1 letter and 1 digit');
      setIsValid({email: true, password: false});
    }
    else {
      return true;
    }
  }

  function fetchLoginData(evt: FormEvent) {
    evt.preventDefault();
    if (validateInputs(loginData.email, loginData.password)) {
      dispatch(login(loginData));
    }
  }

  useEffect(() => {
    if (authorized) {
      navigate('/', {replace: true});
    }
    return () => {
      setIsValid({email: true, password: true});
      setErrorMessage('');
    };
  }
  , [authorized, navigate]);

  return (
    <form action="#" className="sign-in__form" onSubmit={fetchLoginData}>
      { errorMessage ?
        <div className="sign-in__message">
          <p>{errorMessage}</p>
        </div> : null}
      <div className="sign-in__fields">
        <div className={`sign-in__field ${isValid.email ? '' : 'sign-in__field--error'} `}>
          <input onChange={handleLoginData} className="sign-in__input" type="email" placeholder="Email address" name="email" id="email" />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className={`sign-in__field ${isValid.password ? '' : 'sign-in__field--error'} `}>
          <input onChange={handleLoginData} className="sign-in__input" type="password" placeholder="Password" name="password" id="password" />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}
export default SignInForm;
