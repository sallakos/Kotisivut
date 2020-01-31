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

  let width = 0.167 * 0.9 * (window.innerWidth - 30)
  if(window.innerWidth >= 768 && window.innerWidth < 1200) {
    width = 0.333 * 0.9 * (window.innerWidth - 30)
  } else if (window.innerWidth < 768) {
    width = 0.5 * 0.9 * (window.innerWidth - 30)
  }

  const [language, setLanguage] = useState('fi')
  const [description, setDescription] = useState(data.description.fi)
  const [background, setBackground] = useState({ title: headings.background.fi, content: data.background.fi })
  const [about, setAbout] = useState({ title: headings.about.fi, content: data.about.fi })
  const [gallery, setGallery] = useState({ title: headings.gallery.fi })
  const [popupVisibility, setPopupVisibility] = useState('invisible')
  const [scrollEnabled, setScrollEnabled] = useState(true)
  const [activeImage, setActiveImage] = useState(1)
  const [smallImageHeight, setSmallImageHeight] = useState(width)

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

  const updateSmallImageHeight = () => {

    if (window.innerWidth >= 1200) {
      setSmallImageHeight(0.167 * 0.8 * (document.documentElement.clientWidth - 30))
    } else if (window.innerWidth >= 768) {
      setSmallImageHeight(0.333 * 0.8 * (document.documentElement.clientWidth - 30))
    } else {
      setSmallImageHeight(0.5 * 0.9 * (document.documentElement.clientWidth - 30))
    }

    const smallImages = document.getElementsByClassName('img-clickable')

    for (var i = 0; i < smallImages.length; i++) {
      smallImages[i].style.height = smallImageHeight + 'px'
    }

  }

  useEffect(changeTextLanguage, [language])
  useEffect(toggleScroll, [scrollEnabled])
  useEffect(updateSmallImageHeight)
  useEffect(() => {
    window.addEventListener('resize', updateSmallImageHeight)
    return () => window.removeEventListener('resize', updateSmallImageHeight)
  })

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
