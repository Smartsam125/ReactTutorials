import React from 'react'

function Person({handlePerson}) {

  return (
    <div>
        <h2>Iam  {handlePerson.Name} i Know {handlePerson.Skill} And iam {handlePerson.Age} years old</h2>
    </div>
  )
}

export default Person