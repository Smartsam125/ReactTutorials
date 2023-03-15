import React from 'react'

function Greet(props) {
   // props.name='smartsam'
   const {name,heroName} = props
  return (
    <div>
        <h2>
        {name} or {heroName} or {props.children}
        </h2>
        
    </div>
  )
}

export default Greet