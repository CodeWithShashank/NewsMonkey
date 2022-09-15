import React from 'react'
import loadingBlack from './loadingBlack.gif'

const Spinner = ()=>{
    return (
      <div className="text-center">
        <img className='my-3' src={loadingBlack} alt= "Loading"/>
      </div>
    )
  
}

export default Spinner