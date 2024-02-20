import './App.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './assets/styles/typography.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Banner from './components/Banner'
import { useState } from 'react'

function App() {
  const [link, setLink] = useState('')
  const [links, setLinks] = useState([
    {
      userLink:
        'https://translate.google.com/?sl=en&tl=pt&text=poverty&op=translate',
      shortLink: 'https://translate.google',
    },
    {
      userLink:
        'https://translate.google.com/?sl=en&tl=pt&text=poverty&op=translate',
      shortLink: 'https://translate.google',
    },
  ])
  const callingAPI = (e) => {
    e.preventDefault()
    const apiUrl = 'https://cleanuri.com/api/v1/shorten'
    const data = new URLSearchParams()
    data.append('url', link)
    const options = {
      method: 'POST',
      body: data,
    }
    fetch(apiUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setLinks(...links, {
          YourURL: link,
          shortURL: data.result_url,
        })
      })
      .catch((error) => {
        console.error('Ocorreu um erro:', error)
      })
  }

  return (
    <div className="mainContainer">
      <Header />
      <Intro />
      <MainContent
        callingAPI={callingAPI}
        setLink={(e) => setLink(e.target.value)}
        link={link}
        links={links}
      />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
