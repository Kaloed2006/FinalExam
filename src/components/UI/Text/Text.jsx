import React from 'react'

export default function Text({mycolor, myfse, myff, mytext}) {
  return (
    <p style={{
        color: mycolor,
        fontSize: myfse,
        fontFamily: myff,
    }}>{mytext}</p>
  )
}