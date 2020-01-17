import React, { useState, useEffect } from 'react'
import './style.css'
import data from './content/data.json'
import pictures from './content/pictures.json'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Divider from './components/Divider'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import PopupGallery from './components/PopupGallery'
import Section from './components/Section'
import TextContent from './components/TextContent'

const App = () => {

  const headings = data.headings

  const [language, setLanguage] = useState('fi')
  const [description, setDescription] = useState(data.description.fi)
  const [background, setBackground] = useState({ title: headings.background.fi, content: data.background.fi })
  const [about, setAbout] = useState({ title: headings.about.fi, content: data.about.fi })
  const [gallery, setGallery] = useState({ title: headings.gallery.fi })
  const [popupVisibility, setPopupVisibility] = useState('invisible')
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [activeImage, setActiveImage] = useState(1)

  const togglePopupGallery = (visibility, activeImage, scrollEnabled) => {
    setPopupVisibility(visibility)
    setActiveImage(activeImage)
    setScrollEnabled(scrollEnabled)
  }

  const changeTextLanguage = () => {
    setDescription(data.description[language])
    setBackground({ title: headings.background[language], content: data.background[language] })
    setAbout({ title: headings.about[language], content: data.about[language] })
    setGallery({ title: headings.gallery[language] })
  }

  const toggleLanguage = () => {
    language === 'fi' ? setLanguage('en') : setLanguage('fi')
  }

  const toggleScroll = () => {
    const body = document.getElementsByTagName('body')[0].classList
    scrollEnabled ? body.remove('no-scroll') : body.add('no-scroll')
  }

  useEffect(changeTextLanguage, [language])
  useEffect(toggleScroll, [scrollEnabled])

  return (
    <div>
      <NavBar language={language} toggleLanguage={toggleLanguage} />
      <Header description={description} />
      <Section id='history' component={<TextContent title={background.title} content={background.content} />} />
      <Divider order='first' />
      <Section id='about' component={<TextContent title={about.title} content={about.content} />} />
      <Divider order='second' />
      <Section id='gallery' component={<Gallery title={gallery.title} pictures={pictures} onImageClick={togglePopupGallery} />} />
      <PopupGallery language={language} pictures={pictures} visibility={popupVisibility} onCloseClick={togglePopupGallery} activeImage={activeImage} />
      <Footer />
    </div>
  )
}

export default App
