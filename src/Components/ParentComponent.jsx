import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"PARENT"
      }
      this.greetParent=this.greetParent.bind(this)
    }
    greetParent(ChildName){
        alert(`Hello ${this.state.parentName} from ${ChildName}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greatHandler={this.greetParent}/>

      </div>
    )
  }
}

export default ParentComponent