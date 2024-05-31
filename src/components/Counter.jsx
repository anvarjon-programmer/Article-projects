import React from 'react'
import AddCounter from './AddCounter'
import MinusCounter from './MinusCounter'
import ResetCounter from './ResetCounter'

const Counter = () => {
  return (
    <div className='btn-group'>
        <AddCounter/>
        <MinusCounter/>
        <ResetCounter/>
    </div>
  )
}

export default Counter