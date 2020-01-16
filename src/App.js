import React, { useState, useEffect } from 'react'
import './style.css'
import data from './content/data.json'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Background from './components/Background'
import Divider from './components/Divider'
import About from './components/About'
import Footer from './components/Footer'

const App = () => {

  const [language, setLanguage] = useState('fi')
  const [description, setDescription] = useState(data.description.fi)
  const [background, setBackground] = useState({ title: 'Kuka', content: data.background.fi })
  const [about, setAbout] = useState({ title: 'Mitä', content: data.about.fi })
  
  const toggleLanguage = () => {
    if (language === 'fi') {
      setLanguage('en')
      setDescription(data.description.en)
      setBackground({ title: 'Who', content: data.background.en })
      setAbout({ title: 'What', content: data.about.en })
    } else {
      setLanguage('fi')
      setDescription(data.description.fi)
      setBackground({ title: 'Kuka', content: data.background.fi })
      setAbout({ title: 'Mitä', content: data.about.fi })
    }
  }

  return (
    <div>
      <NavBar language={language} toggleLanguage={toggleLanguage} />
      <Header description={description} />
      <Background title={background.title} content={background.content} />
      <Divider order={'first'}/>
      <About title={about.title} content={about.content} />
      <Divider order={'second'} />
      <section id="gallery" className="min-vh-100 container-fluid">
        <div className="section-content">
          <h2>
            <span className="lang">Välähdyksiä.</span>
            <span className="lang hidden">Snapshots.</span>
          </h2>
          {/* <div className="row no-gutters justify-content-center">
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img1.jpeg" alt="Maisemia Andorrassa" id="img1" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img2.jpg" alt="Seeproja Etelä-Afrikassa" id="img2" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img3.jpg" alt="Melontaa Aurajoessa" id="img3" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img4.jpg" alt="Läskipyöräilyä Ylläksellä" id="img4" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img5.jpg" alt="Paprika" id="img5" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img6.jpg" alt="Kiipeilyä" id="img6" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img7.jpeg" alt="Värejä Kuubassa" id="img7" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img8.jpg" alt="Voimanoston MM-kisat Texasissa" id="img8" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img9.jpg" alt="Sähköpotkulaudalla Lissabonissa" id="img9" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img10.jpg" alt="Voimailua Akateeminen Herwannan vahvin nainen -kilpailussa" id="img10" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable position-top" src="kuvat/img11.jpg" alt="Maastaveto opiskelijoiden voimanoston MM-kilpailuissa" id="img11" />
            </div>
            <div className="col-6 col-md-2 col-gallery">
              <img className="img-clickable" src="kuvat/img12.jpg" alt="Sagrada Familia Barcelonassa" id="img12" />
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
