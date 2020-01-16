import React from 'react'
import TextContent from './TextContent'

const About = ({ title, content }) => {
  return (
    <section id='about' className='min-vh-100 container-fluid'>
      <div className='section-content'>
        <TextContent title={title} content={content} />
      </div>
    </section>
  )
}

export default About