// Code Keypad Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class Keypad extends React.Component {
  handleKeyUp(e) {
    console.log('Entering password...')
  }
  render() {
    return (
      <input onKeyUp={this.handleKeyUp} type="password" />
    )
  }
}

export default Keypad
