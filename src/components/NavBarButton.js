import React from 'react'

const NavBarButton = ({ id, tooltipText, isDisabled }) => {

  const disabled = isDisabled ? 'true' : ''

  return (
    <button type='button' id={`btn-${id}`}
            className='nav-btn btn btn-light'
            disabled={disabled}
            data-toggle='tooltip'
            data-placement='right'
            data-original-title={tooltipText}>
    </button>
  )
}

export default NavBarButton