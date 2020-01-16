import React, { useState, useEffect} from 'react'
import './style.css'
import data from './content/data.json'
import NavBar from './components/NavBar'
import Header from './components/Header';
import TextContent from './components/TextContent'
import Background from './components/Background';
import Divider from './components/Divider'
import About from './components/About'


const App = () => {

  console.log(data.description.fi)

  const [language, setLanguage] = useState('fi')
  const [description, setDescription] = useState(data.description.fi)
  const [background, setBackground] = useState(['Kuka', data.background.fi])

  // const hook = () => {
  //   setDescription(data.description.fi)
  // }

  const toggleLanguage = () => {
    if (language === 'fi') {
      setLanguage('en')
      setDescription(data.description.en)
      setBackground(['Who', data.background.en])
    } else {
      setLanguage('fi')
      setDescription(data.description.fi)
      setBackground(['Kuka', data.background.fi])
    }
  }

  // useEffect(hook, [])

  return (
    <div>
      <NavBar language={language} toggleLanguage={toggleLanguage} />
      <Header description={description} />
      <Background />
      <TextContent title={background[0]} content={background[1]} />
      <Divider />
      <About />
      <Divider />
    </div>
  );
}

export default App;
