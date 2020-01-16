import React from 'react'
import TextContent from './TextContent'

const Background = ({ title, content }) => {
  return (
    <section id='history' className='min-vh-100 container-fluid'>
    <div className='section-content'>
      <TextContent title={title} content={content} />
    </div>
  </section>
  )
}

export default Background