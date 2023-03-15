import React, { Component } from 'react'
import styles from './myStyles.module.css'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'',
        age:'',
        options:'react'
      }
     // this.submit = this.submit.bind(this)
      this.submmit=this.submmit.bind(this)
      this.handleForm=this.handleForm.bind(this)
      this.handleAge = this.handleAge.bind(this)
      this.handleSelect =this.handleSelect.bind(this)
    }
    submmit(event){
        alert(`${this.state.name} ${this.state.age} ${this.state.options}`)
        event.preventDefault()
        
    }
    handleAge(event){
        this.setState({
            age:event.target.value
        })
    }
    handleSelect(event){
        this.setState({
           options:event.target.value 
        })
    }
    handleForm(event){
        this.setState({
            name:event.target.value
        })
        // event.preventdefault
    }
  render() {
    const {name,age,options} = this.state
    return (
      <div >
        <form action="" className={styles.form}>
            <label htmlFor="">Name:
                <input type="text" name="Input" id="" value={name} onChange={this.handleForm}/>
            </label>
            <br />
            <label htmlFor="" >Age: 
            <input type="text" name='age' value={age} onChange={this.handleAge} />

            </label>
            <br />
            <label htmlFor="">Select:
                <select name="" id="" value={options}  onChange={this.handleSelect}>
                    <option >React</option>
                    <option >Angular</option>
                    <option >TypeScript</option>
                    <option >SpringStarter JPK</option>
                    
                </select>

            </label>
            
        </form>
        {this.state.name !='' && <button type='submit' onClick={this.submmit}>SubmitShit</button>}
      </div> 
        
    )
  }
}

export default Form