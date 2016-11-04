import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  componentDidMount () {
    console.log("first")
    console.log("second")
    throw new Error("im an error")
  }

  render () {
    return (
      <div>Hi I'm an App!</div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
})
