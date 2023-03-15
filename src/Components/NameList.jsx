import React from 'react'
import Person from './Person'

function NameList() {
    const Names =['bruce','clark','danah','bruce']
    const persons=[
        {id:1,
         Name:'Bruce',
         Age:17,
         Skill:'React'

        },
        {id:2,
         Name:'Clark',
         Age:43,
         Skill:'Angular'

        },
        {
            id:2,
            Name:'Dianah',
            Age:1500,
            Skill:'Spring Actuator'
        }
    ]
    const NamesList=persons.map((person)=><Person key={person.id} handlePerson={person}/>)
    const PersonsList =Names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
  return (
    <div>
        {
            PersonsList
        }
    </div>
  )
}

export default NameList