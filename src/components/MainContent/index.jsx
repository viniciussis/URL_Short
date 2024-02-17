import Cards from './Cards'
import './MainContent.scss'

const MainContent = () => {
  return (
    <div className="mainContent">
      <h2 className="mainContent__title">Advanced Statistics</h2>
      <p className="main__para">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Cards />
    </div>
  )
}

export default MainContent
