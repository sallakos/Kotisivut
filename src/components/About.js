import React from 'react'

const Background = () => {
  return (
    <section id="about" className="min-vh-100 container-fluid">
      <div className="section-content">
        <h2>
          <span className="lang">Mitä.</span>
          <span className="lang hidden">What.</span>
        </h2>
        <span className="lang">
          <p>
            Tämä kotisivu on toiminut henkilökohtaisena hiekkalaatikkona verkkotyökalujen harjoitteluun. Tällä erää siihen on hyödynnetty HTML:n, CSS:n ja JavaScriptin lisäksi
            Bootsrapia ja jQuerya. Lisää työkaluja on opiskeltavana ja sivun toiminnallisuus tulee vielä tästä kehittymään. Tällä hetkellä osa osioista on rehellisiä
            palikkaratkaisuja ja mahdollisesti hyvin naiivistikin toteutettu, mutta jokainen aloittaa jostakin. Olen kuitenkin riittävän ylpeä aikaansaannoksestani
            jakaakseni sen maailmalle.
        </p>
          <p>
            Jos haluat vilkaista, millaiset verkkosivut sain aikaan yhdeksännellä luokalla, kurkkaa toki. Jotain kehitystä lienee havaittavissa.
        </p>
        </span>
        <span className="lang hidden">
          <p>
            This web page has been my personal sandbox for learning web development tools. Currently the page makes use of Bootstrap and jQuery in addition to pure HTML and CSS.
            I'm constantly learning new tools and the functionality of this site will evolve. Now some of the solutions might not be as elegant as they could, but everyone
            starts somewhere. Anyways I'm proud enough of what I've accomplished to share it with the world.
        </p>
        </span>
        <div className="btn-wrapper">
          <a className="btn btn-outline-light about-btn" href="/arkisto/index.html" target="_blank" role="button">
            <span className="lang">Arkisto</span>
            <span className="lang hidden">Archive</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Background