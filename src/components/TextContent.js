import React from 'react'

const TextContent = ({ title, content }) => {

  const formattedContent = content.map(p => <p>{p}</p>)

  return (
    <section id="history" className="min-vh-100 container-fluid">
      <div className="section-content">
        <h2>{title}.</h2>
        <div>{formattedContent}</div>
        <div className="btn-wrapper">
          <div className="lang">
            <a className="btn btn-outline-light about-btn" href="tiedostot/CV_Koskinen_Salla_julkinen.pdf" target="_blank" role="button">CV</a>
            {/* <a className="btn btn-outline-light about-btn" href="http://urn.fi/URN:NBN:fi:tty-201706221614" target="_blank" role="button">Diplomityö</a> */}
            <a className="btn btn-outline-light about-btn" href="https://github.com/sallakos" target="_blank" role="button">Github</a>
          </div>
          <div className="lang hidden">
            <a className="btn btn-outline-light about-btn" href="tiedostot/CV_Koskinen_Salla_public.pdf" target="_blank" role="button">CV</a>
            {/* <a className="btn btn-outline-light about-btn my-tooltip" href="http://urn.fi/URN:NBN:fi:tty-201706221614" target="_blank" role="button" data-toggle="tooltip" data-placement="top" title="In Finnish">Master's thesis</a> */}
            <a className="btn btn-outline-light about-btn" href="https://github.com/sallakos" target="_blank" role="button">Github</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TextContent