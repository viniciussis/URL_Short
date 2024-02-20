import Cards from './Cards'
import Form from './Form'
import LinkCard from './LinkCard'
import './MainContent.scss'

const MainContent = ({ callingAPI, link, setLink, links }) => {
  return (
    <div className="mainContent">
      <Form callingAPI={callingAPI} setLink={setLink} link={link} />
      {links.map((link, index) => (
        <LinkCard link={link} key={index} />
      ))}
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
