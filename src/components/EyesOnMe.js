// Code EyesOnMe Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class EyesOnMe extends React.Component {

  handleFocus(e) {
    console.log('Good!')
  }

  handleBlur(e) {
    console.log('Hey! Eyes on me!')
  }
  render() {
    return (
      <button onBlur={this.handleBlur} onFocus={this.handleFocus} type="button">Click Me!</button>
    )
  }
}

export default EyesOnMe
