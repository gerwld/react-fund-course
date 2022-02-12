import React from 'react'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../../context/index';

function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
  }
  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Логин" autoComplete="username"/>
        <MyInput type="password" placeholder="Пароль" autoComplete="current-password"/>
        <MyButton type="submit" >Войти</MyButton>
      </form>
    </div>
  )
}

export default Login;