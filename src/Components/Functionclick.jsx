import React from 'react'

function Functionclick() {
    const clickHandler= () =>{
      console.log("hello smartsam");
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default Functionclick