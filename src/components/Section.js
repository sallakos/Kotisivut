import React from 'react'

const Section = ({ id, component }) => {
  return (
    <section id={id} className='min-vh-100 container-fluid'>
      <div className='section-content'>
        {component}
      </div>
    </section>
  )
}

export default Section