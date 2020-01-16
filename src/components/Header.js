import React from 'react'

const Header = ({ description }) => {
  return (
    <section id='title' className='min-vh-100 container-fluid'>
      <div className='section-content'>
        <div className='row'>
          <div className='col-md-6 title-text'>
            <h1 className='title-h1'>Salla.</h1>
            <h4>{description}
            </h4>
          </div>
          <div className='col-md-6'>
            <img src='kuvat/title.jpg' className='title-img' alt='Sallan kuva' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header