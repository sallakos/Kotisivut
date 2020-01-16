import React, { useState /*, useEffect*/ } from 'react'
import './style.css'
import data from './content/data.json'
import pictures from './content/pictures.json'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Background from './components/Background'
import Divider from './components/Divider'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import PopupGallery from './components/PopupGallery'

const App = () => {

  const [language, setLanguage] = useState('fi')
  const [description, setDescription] = useState(data.description.fi)
  const [background, setBackground] = useState({ title: 'Kuka', content: data.background.fi })
  const [about, setAbout] = useState({ title: 'Mitä', content: data.about.fi })
  const [gallery, setGallery] = useState({ title: 'Välähdyksiä' })

  const toggleLanguage = () => {
    if (language === 'fi') {
      setLanguage('en')
      setDescription(data.description.en)
      setBackground({ title: 'Who', content: data.background.en })
      setAbout({ title: 'What', content: data.about.en })
      setGallery({ title: 'Snapshots'})
    } else {
      setLanguage('fi')
      setDescription(data.description.fi)
      setBackground({ title: 'Kuka', content: data.background.fi })
      setAbout({ title: 'Mitä', content: data.about.fi })
      setGallery({ title: 'Välähdyksiä'})
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
      <Gallery title={gallery.title} pictures={pictures} />
      <PopupGallery language={language} pictures={pictures} />
      <Footer />
    </div>
  )
}

export default App
