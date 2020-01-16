import React from 'react'

const Divider = ({ order }) => {
  return (
    <div className='hr'>
      <hr className={`right-diagonal ${order}`} />
      <hr className={`left-diagonal ${order}`} />
    </div>
  )
}

export default Divider