import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler(){
        console.log("smartsam");
    }
  render() {

    return (
      <div>
        <button onClick={this.ClickHandler}>ClassClick</button>
      </div>
    )
  }
}

export default ClassClick