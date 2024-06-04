import React from 'react'

const Loader = () => {
  return (
    <div>
        <div className="spinner-border d-block mx-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}

export default Loader