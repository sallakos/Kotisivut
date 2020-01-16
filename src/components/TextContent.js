import React from 'react'

const TextContent = ({ title, content }) => {

  const formattedContent = content.map((p, index) => <p key={index}>{p}</p>)

  return (
    <div>
      <h2>{title}.</h2>
      <div>{formattedContent}</div>
    </div>
  )
}

export default TextContent