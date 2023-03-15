import React from 'react'

function ChildComponent(props) {
    //console.log();
    console.log(props);

  return (
    <div>
        <button onClick={()=>props.greatHandler('child')}>GreetParent</button>
    </div>
  )
}

export default ChildComponent