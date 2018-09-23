import React, { Component } from 'react'
import Board from './containers/Board'
import './styles/globals.scss'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Board />
      </div>
    )
  }
}

export default App
