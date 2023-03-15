import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
        count:0
         
      }
    }
    Increement(){

//    this.setState({
//     count:this.state.count + 1
//    },()=>{console.log(` call back value of ${this.state.count}`);})
//    console.log(this.state.count);
      this.setState((prevState,props)=>({
        count:prevState.count + parseInt(props.name) //props.name 

      }))
    }
    increementFive(){
        this.Increement()
        this.Increement()
        this.Increement()
        this.Increement()
        this.Increement()

    }
  render() {
    const {name} = this.props
    return (
      <div><h2>{this.state.count}
        </h2>
        <button onClick={()=>this.increementFive()}>Click</button>
        <h2>Iam called {name} </h2>
        </div>
    )
  }
}

export default Counter