import './App.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './assets/styles/typography.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Banner from './components/Banner'
import { useEffect, useState } from 'react'

function App() {
  const [link, setLink] = useState('')
  const [links, setLinks] = useState([])

  useEffect(() => {
    const storageData = sessionStorage.getItem('data')
    if (storageData) {
      try {
        setLinks(JSON.parse(storageData))
      } catch (error) {
        console.error('Error parsing storage data: ', error)
        sessionStorage.removeItem('data')
      }
    }
  }, [])

  async function callingAPI() {
    const backendUrl = 'https://url-short-api-seven.vercel.app/shorten'

    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: link }),
      })
      const data = await response.json()
      const updatedLinks = [
        ...links,
        {
          userLink: link,
          shortLink: data.result_url,
        },
      ]
      setLinks(updatedLinks)
      sessionStorage.setItem('data', JSON.stringify(updatedLinks))
      setLink('')
    } catch (error) {
      console.error('Failed to call backend: ', error)
    }
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
