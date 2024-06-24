import React from 'react'
import st from './More.module.css'
import Text from '../Text/Text'

function More() {
  const moreData = [
    {
      id: 0,
      title: 'Learn Python Programming Masterclass',
      bgc: '#FFB199',
      clr: '#FFB199'
    },
    {
      id: 1,
      title: 'React - The Complete Guide ',
      bgc: '#04BEFE',
      clr: '#04BEFE'
    },
    {
      id: 2,
      title: 'Sketch from A to Z: Become an App Designer',
      bgc: '#27AE60',
      clr: '#27AE60'
    },
  ]

  return (
    <>
      {moreData.map((item, i) => (
        <div key={i} className={st.more} style={{backgroundColor: item.bgc}}>
          <Text mycolor={'#FFFFFF'} myff={'DM'} myfse={'26px'} mytext={item.title} />
          <button style={{color: item.clr}} className={st.more__btn}>More</button>
        </div>
      ))}
    </>
  )
}

export default More