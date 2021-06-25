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
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values,handleFieldsChange} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <>
            <AppBar title='User Personal Details' />
            <TextField 
                hintText='Occupation'
                floatingLabelText='occupation'
                defaultValue={values.occupation}
                onChange={handleFieldsChange('occupation')}
            />
            <br/><br/>
            <TextField 
                hintText='City'
                floatingLabelText='city'
                defaultValue={values.city}
                onChange={handleFieldsChange('city')}
            />
            <br/><br/>
            <TextField 
                hintText='Enter Your Bio'
                floatingLabelText='bio'
                defaultValue={values.bio}
                onChange={handleFieldsChange('bio')}
            />   
            <br/><br/>
            <Button onClick={this.back} variant="contained" color="primary" >
              Back
            </Button>   
            <Button onClick={this.continue} variant="contained" color="primary" >
              Continue
            </Button>   
          </>
        </MuiThemeProvider>
      </div>
    )
  }
}

