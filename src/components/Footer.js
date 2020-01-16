import React from 'react'
import Button from './BigButton'

const Footer = () => {
  return (
    <footer id='contact' className='container-fluid'>
      <div className='contact-links'>
        <Button url={'https://www.facebook.com/sallakos'} icon={'fab fa-facebook-f'} />
        <Button url={'https://www.instagram.com/sallakos'} icon={'fab fa-instagram'} />
        <Button url={'https://www.linkedin.com/in/sallakos'} icon={'fab fa-linkedin-in'} />
        <Button url={'mailto: sallakos@mbnet.fi'} icon={'far fa-envelope'} />
      </div>
    </footer>
  )
}

export default Footer