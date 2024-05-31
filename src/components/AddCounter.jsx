import React from 'react'
import { useDispatch } from 'react-redux'
import { plusCOunter } from '../reducers/countSlice'

const AddCounter = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <button className='btn btn-success' onClick={() => dispatch(plusCOunter())}>add</button>
    </div>
  )
}

export default AddCounter