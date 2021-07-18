import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {login} from '../../store/api-actions';
import {addUserEmail} from '../../store/action';
import Header from '../header/header';

function LoginPage () {

  const dispatch = useDispatch();

  const onSubmit = (authData) => {
    dispatch(login(authData));
    dispatch(addUserEmail(authData['email']));
  };

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const onInputChange = (evt) => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value,
    });
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      ...userData,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={onFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={'required'}
                  onChange={onInputChange}
                  autoFocus
                  data-testid="email"
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required={'required'}
                  onChange={onInputChange}
                  data-testid="password"
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="{#}">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
