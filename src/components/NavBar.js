import React from 'react'

const NavBar = ({ language, toggleLanguage, activeSection }) => {

  const isFinnish = language === 'fi' ? ['active-lang', 'true'] : ['nonactive-lang', '']
  const isEnglish = language === 'en' ? ['active-lang', 'true'] : ['nonactive-lang', '']

  return (
    <nav className='navigation'>
      <div className='lang-chooser'>
        <button onClick={toggleLanguage} className={`nav-lang-btn language-choose ${isFinnish[0]}`} type='button' disabled={`${isFinnish[1]}`}>FI</button>|
        <button onClick={toggleLanguage} className={`nav-lang-btn language-choose ${isEnglish[0]}`} type='button' disabled={`${isEnglish[1]}`}>EN</button>
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