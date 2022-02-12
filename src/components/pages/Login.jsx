import React from 'react'
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

function Login() {
  return (
    <div>
      <h1>Страница для логина</h1>
      <form action="">
        <MyInput type="text" placeholder="Логин" autoComplete="username"/>
        <MyInput type="password" placeholder="Пароль" autoComplete="current-password"/>
        <MyButton type="submit" >Войти</MyButton>
      </form>
    </div>
  )
}

export default Login;