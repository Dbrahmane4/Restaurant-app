import React from 'react'

function Loader() {
  return (
    <div className='col-12'>
        <span className='fa fa-spinner fa-pulse fa-3x fa-primary'></span>
        <p>Loading ...</p>
    </div>
  )
}

export default Loader