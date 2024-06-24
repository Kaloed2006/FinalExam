import React from 'react'
import st from './Layout.module.css'
import Card from '../UI/Card/Card'
import More from '../UI/More/More'

export default function Layout() {
  return (
    <div className={st.container}>
      <div className={st.card__list}>
        <Card />
      </div>
      <div className={st.more__list}>
        <More/>
      </div>
    </div>
  )
}