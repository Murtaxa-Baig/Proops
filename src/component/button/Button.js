import React from 'react'
import './Button.css'
export default function Button({bgColor, title}) {
  return (
    <div>
        <button className='btn' style={{backgroundColor: bgColor? bgColor : 'rgb(72, 149, 239)'}}>
            {title ? title : "test text"}
        </button>
    </div>
  )
}
