import React from 'react'
import FormBase from './components/FormBase'


export default function App() {
    return (
        <>
            <FormBase />
            <Toggle />
        </>
    )
} 


 class Toggle extends React.Component {
    constructor(){
        super();
        this.state = {
            toggle : false
        }
    }
    handleToggle = () => {
        this.setState(prevState => ({
            toggle : !prevState.toggle
        }))
    }
    render() {
        return (
            <div>
                <a href='#' onClick={this.handleToggle} >click to Toggle</a>
                {this.state.toggle === true ? <p>show this text on screen on click</p> : null}
                
            </div>
        )
    }
}
