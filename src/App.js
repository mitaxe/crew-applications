import React, { Component } from 'react'
import Board from './containers/Board'
import './styles/vendor/normalize.css'
import './styles/app.css'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Board />
      </div>
    )
  }
}

export default App
