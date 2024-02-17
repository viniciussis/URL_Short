import './App.scss'
import './assets/styles/normalize.scss'
import './assets/styles/reset.scss'
import './assets/styles/typography.scss'
import Header from './components/Header'
import Intro from './components/Intro'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Intro />
      <MainContent />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
