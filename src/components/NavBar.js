import React from 'react'

const NavBar = ({ language, toggleLanguage }) => {

  const isFinnish = language === 'fi' ? {status: 'active-lang', active: true} : {status: 'nonactive-lang', active: ''}
  const isEnglish = language === 'en' ? {status: 'active-lang', active: true} : {status: 'nonactive-lang', active: ''}

  return (
    <nav className='navigation'>
      <div className='lang-chooser'>
        <button onClick={toggleLanguage} className={`nav-lang-btn ${isFinnish.status}`} type='button' disabled={isFinnish.active}>FI</button>|
        <button onClick={toggleLanguage} className={`nav-lang-btn ${isEnglish.status}`} type='button' disabled={isEnglish.active}>EN</button>
      </div>
      <div className='vert-navbar'>
        <button type='button' id='btn-title' className='nav-btn btn btn-light' disabled></button>
        <button type='button' id='btn-history' className='nav-btn btn btn-light'></button>
        <button type='button' id='btn-about' className='nav-btn btn btn-light'></button>
        <button type='button' id='btn-gallery' className='nav-btn btn btn-light'></button>
        <button type='button' id='btn-contact' className='nav-btn btn btn-light'></button>
      </div>
    </nav>
  )
}

export default NavBar