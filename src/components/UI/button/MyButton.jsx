import React from 'react'
import s from './MyButton.module.css';

export default function MyButton(props) {
  return (
    <button className={s.myBtn} {...props}>
    </button>
  )
}
