import React from 'react'

const Background = () => {
  return (
    <section id="history" className="min-vh-100 container-fluid">
    <div className="section-content">
      <h2>
        <span className="lang">Kuka.</span>
        <span className="lang hidden">Who.</span>
      </h2>
      <span className="lang">
        <p>
          Olen Salla, tietotekniikasta innostunut diplomi-insinööri ja matematiikan opettaja. Valmistuin Tampereen teknillisestä yliopistosta vuonna 2017, jonka jälkeen hyppäsin
          opettajan hommiin kaupungin vaihtuessa Turkuun. Samalla kehitin interaktiivisia matematiikan tehtäviä sähköiseen oppimisympäristöön, ja vanha suola alkoi janottaa.
          Päätin toteuttaa unelmani ja palasin opiskelemaan ohjelmointia. Sillä tiellä ollaan.
        </p>
        <p>
          Koneen näpyttelyn ohella nautin liikunnasta, tällä hetkellä ykköslajina toimii crossfit. Kokeiltu on lajeja suunnistuksesta voimanostoon, välillä ihan tosissaankin,
          mutta nykyisin tähtäin on oman hyvinvoinnin ylläpitämisestä. Säännöllisen epäsäännöllisesti kehitän jonkin hetkittäisen uuden projektin, johon keskitän aivan
          liian suuren osan energiastani: esimerkkeinä vaikkapa neulominen tai oman aktiivisuusdatan kuvaajien tutkiminen, mikä milloinkin.
          Kun projektia ei ole, joko suunnittelen sellaista, suoritan Netflix-maratonia, haaveilen matkustamisesta tai pohdin, mitä söisin seuraavaksi.
        </p>
      </span>
      <span className="lang hidden">
        <p>
          I'm Salla, a information technology enthusiast. I'm a Master of Science and mathematics teacher who graduated from Tampere University of Technology in 2017, after which I
          returned to my old home town of Turku to pursue a career in teaching. While teaching I was also developing interactive mathematics exercises for a digital learning environment,
          and what can I say: first love, last love. Coding is something I really enjoy, and I decided that it was something I want to do more &ndash; so now I'm studying IT at University of Turku.
        </p>
        <p>
          While not on the computer, I enjoy sports. Currently I'm doing crossfit. I've tried different things, orienteering and powerlifting to mention a few, at times even quite seriously,
          but now I just want to keep myself fit. Every now and then I get excited about a new project that I work on way too eagerly: it may be knitting or studying my activity data,
          pretty much anything you can imagine. When not working on a project, I plan on one, binge watch Netflix, dream about travelling or think about what I'm going to eat next.
        </p>
      </span>
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

export default Background