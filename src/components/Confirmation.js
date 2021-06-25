import React, { Component } from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import { Button} from '@material-ui/core';
import { List , ListItem} from 'material-ui/List'



export default class Confirmation extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  }
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }
  render() {
    const {values : {firstName , lastName , email , occupation , city , bio}} = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <>
            <AppBar title='User Personal Details' />
            <List>
              <ListItem primaryText='First Name' secondaryText={firstName}/>
              <ListItem primaryText='Last Name' secondaryText={lastName}/>
              <ListItem primaryText='Email' secondaryText={email}/>
              <ListItem primaryText='Occupation' secondaryText={occupation}/>
              <ListItem primaryText='city' secondaryText={city}/>
              <ListItem primaryText='Bio' secondaryText={bio}/>
            </List>
            <br/><br/>
            <Button onClick={this.back} variant="contained" color="primary" >
              Back
            </Button>   
            <Button onClick={this.continue} variant="contained" color="primary" >
              Confirm & Continue
            </Button>   
          </>
        </MuiThemeProvider>
      </div>
    )
  }
}

