import React from 'react'

const BigButton = ({ url, icon }) => 
<a className='contact-link' href={url} rel='noopener noreferrer' target='_blank'><i className={icon}></i></a>

export default BigButton