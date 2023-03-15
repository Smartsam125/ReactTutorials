import React from 'react'
import './myStyles.css'

function StyleShet(props) {
  let className = props.primary ? 'primary':'red'
  
  return (
    <div>
        <h1 className={`${className} sex`}>StyleSheet</h1>

    </div>
  )
}

export default StyleShet