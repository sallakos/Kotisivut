import React from 'react'
import Button from './NavBarButton'

const NavBar = ({ language, toggleLanguage, titles }) => {

  const isFinnish = language === 'fi' ? {status: 'active-lang', active: true} : {status: 'nonactive-lang', active: ''}
  const isEnglish = language === 'en' ? {status: 'active-lang', active: true} : {status: 'nonactive-lang', active: ''}

  return (
    <nav className='navigation'>
      <div className='lang-chooser'>
        <button onClick={toggleLanguage} className={`nav-lang-btn ${isFinnish.status}`} type='button' disabled={isFinnish.active}>FI</button>|
        <button onClick={toggleLanguage} className={`nav-lang-btn ${isEnglish.status}`} type='button' disabled={isEnglish.active}>EN</button>
      </div>
      <div className='vert-navbar'>
        <Button id='title' tooltipText='Salla' disabled={true} />
        <Button id='history' tooltipText={titles.background.title} />
        <Button id='about' tooltipText={titles.about.title} />
        <Button id='gallery' tooltipText={titles.gallery.title} />
        <Button id='contact' tooltipText={titles.footer.title} />
      </div>
    </nav>
  )
}

export default NavBar