import React from 'react'
import { useDispatch } from 'react-redux'
import { minusCOunter } from '../reducers/countSlice'

const MinusCounter = () => {
  const anvar = useDispatch()
  return (
    <div>
      <button className='btn btn-dangers' onClick={() => anvar(minusCOunter())}>min</button>
    </div>
  )
}

export default MinusCounter