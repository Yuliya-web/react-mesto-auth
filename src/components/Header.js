import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export function Header(props) {

  function signOut() {
    localStorage.removeItem('jwt');
    props.handleLogOut();
  }

  return (
  <header className="header">
    <div className="logo"></div>
    <Switch>
      <Route exact path="/">
        <div className="header__info-container">
          <p className="header__email">{props.userData.email}</p>
          <Link to="/sign-up" className="header__log-link" onClick={signOut}>Выйти</Link>
        </div>
      </Route>
      <Route path="/sign-up">
        <Link to="/sign-in" className="header__log-link">Войти</Link>
      </Route>
      <Route path="/sign-in">
        <Link to="/sign-up" className="header__log-link">Регистрация</Link>
      </Route>
    </Switch>
  </header>
  )
}