import React, { Component } from 'react'

export class Hello extends Component {
    state={
        name: 'John',
        age: 30
    }

  render() {
    //const name=this.state.name;
    const {name}=this.state;

    return (
      <div>Hello
        <h1>{name}</h1>
        <button onClick={this.hellow}></button>
      </div>
    )
  }
}

export default Hello