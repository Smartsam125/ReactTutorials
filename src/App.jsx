import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hello from './Components/Hello'
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import Functionclick from './Components/Functionclick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind'
import ParentComponent from './Components/ParentComponent'
import UserGreating from './Components/UserGreating'
import NameList from './Components/NameList'
import StyleShet from './Components/StyleShet'
import InLine from './Components/InLine'
import './Components/myStyles.css'
import styles from './Components/myStyles.module.css'
import Form from './Components/Form'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <UserGreating/> */}
      {/* <NameList/>
       */}
       {/* <StyleShet primary={true}/> */}
       {/* <InLine/> */}
       {/* <h1 className='error'> Error</h1>
       <h1 className={styles.sucess}>Success</h1> */}
       <Form/>
    </div>
    
  )
}

export default App
