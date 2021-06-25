import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import { TextField } from 'material-ui';
import { Button} from '@material-ui/core';

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  render() {
    const {values,handleFieldsChange} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <>
            <AppBar title='User Details' />
            <TextField 
                hintText='Enter Your First Name'
                floatingLabelText='First Name'
                defaultValue={values.firstName}
                onChange={handleFieldsChange('firstName')}
            />
            <br/><br/>
            <TextField 
                hintText='Enter Your Last Name'
                floatingLabelText='last Name'
                defaultValue={values.lastName}
                onChange={handleFieldsChange('lastName')}
            />
            <br/><br/>
            <TextField 
                hintText='Enter Your email'
                floatingLabelText='email'
                defaultValue={values.email}
                onChange={handleFieldsChange('email')}
            />   
            <br/><br/>
            <Button onClick={this.continue} variant="contained" color="primary" >
              Continue
            </Button>      
          </>
        </MuiThemeProvider>
      </div>
    )
  }
}

