import React, { Component } from 'react'

export class UserGreating extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         IsLoggedIn:true,
         userName:true
      }
    }
  render() {
    let message;
    // if(this.state.IsLoggedIn){
    //     message=<h1>WELCOME SMARTSAM</h1>
    // }else{
    //     message=<h1>Welcome timothy</h1>
    // }
    // return(
    //     <div>
    //         {message}
    //     </div>
    // )
    // if (this.state.IsLoggedIn) {
    //     return(
    //         <div>  <h1>Welcme smartsam</h1></div>
    //     )
        
    // }
    // else{return (
    //     <div>
        
    //       <h2>WELCOME BIG GUNS</h2>
    //     </div>
    //   )}
    return(
        // <div>
        //     {this.state.IsLoggedIn ?<h1>Welcome smartsam</h1>: <h2>Welcome james wampamba</h2>}
        // </div>
        this.state.IsLoggedIn ?(<div>Welcome smartsam</div>):(<div>
            welcome paul bear
        </div>)
       // this.state.userName && <div></div>
    )
    
  }
}

export default UserGreating