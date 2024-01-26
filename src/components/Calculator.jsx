import React from 'react'
import Screens from './Screens'
import Box from './Box'

function Calculator() {
  return (
    <>
        <div className='w-96  flex items-center '>
          <div className='bg-white rounded-3xl border-2 border-white'>
            <Screens/>
            <Box/>
          </div>
        </div>
    </>
  )
}

export default Calculator