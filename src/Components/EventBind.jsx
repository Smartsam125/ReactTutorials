import React, { Component } from 'react'
class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"hello"
      }
     this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
       
    this.setState((prevState)=>({
        message:prevState.message +" "+ "God is the answer"
    }))
       
       console.log(this);
    }
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button>
        <button onClick={()=>this.clickHandler()}>FuckOffBro</button> */}
        <button onClick={this.clickHandler}>ClickMe</button>
      </div>
    )
  }
}

export default EventBind