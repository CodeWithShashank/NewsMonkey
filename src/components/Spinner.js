import React, { Component } from 'react'
import loadingBlack from './loadingBlack.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loadingBlack} alt= "Loading"/>
      </div>
    )
  }
}

export default Spinner