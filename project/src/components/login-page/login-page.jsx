import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {login} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import Header from '../header/header';

function LoginPage (props) {
  const {
    onSubmit,
  } = props;

  const inputEmailRef = useRef();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onInputEmailChange = (evt) => {
    setUserEmail(evt.target.value);
  };

  const onInputPasswordChange = (evt) => {
    setUserPassword(evt.target.value);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      email: userEmail,
      password: userPassword,
    });
  };

  useEffect(() => {
    inputEmailRef.current.focus();
  }, []);

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
                  required=""
                  onChange={onInputEmailChange}
                  ref={inputEmailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password" name="password"
                  placeholder="Password"
                  required=""
                  onChange={onInputPasswordChange}
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

LoginPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  authorizationStatus: store.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
    dispatch(ActionCreator.addUserEmail(authData['email']));
  },
});

export {LoginPage};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
