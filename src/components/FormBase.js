import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirmation from './Confirmation'
import Success from './Success'
import FbHome from '../facebookreact/FbHome'
export default class FormBase extends Component {
  state = {
    step : 1,
    firstName : '',
    lastName  : '',
    email     : '',
    occupation: '',
    city      : '',
    bio       : ''
  }
  nextStep = () => {
    this.setState({
      step : this.state.step + 1
    })
  }
  prevStep = () => {
    this.setState({
      step : this.state.step - 1
    })
  }
  handleFieldsChange = input => (e) => {
    e.preventDefault();
    this.setState({[input]: e.target.value})
  }
  render() {
    const {step} = this.state;
    const {firstName , lastName , email , occupation , city , bio} = this.state;
    let values = {firstName , lastName , email , occupation , city , bio};
 
   switch(step){
     case 1 :
       return (
         <>
           <FormUserDetails values={values} nextStep={this.nextStep} handleFieldsChange={this.handleFieldsChange}  />
           <FbHome />
         </>
       )
     case 2 : 
      return (
        <FormPersonalDetails values={values} nextStep={this.nextStep} prevStep={this.prevStep} handleFieldsChange={this.handleFieldsChange} />
      )
     case 3 : 
        return (
          <Confirmation values={values} nextStep={this.nextStep} prevStep={this.prevStep} />
        )
     case 4 :
        return (
          <Success />
        )
   } 
  }
}
