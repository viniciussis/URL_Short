import Cards from './Cards'
import Form from './Form'
import LinkCard from './LinkCard'
import './MainContent.scss'
import PropTypes from 'prop-types'

const MainContent = ({ callingAPI, link, setLink, links }) => {
  return (
    <div className="mainContent">
      <Form callingAPI={callingAPI} setLink={setLink} link={link} />
      {links.map((link, index) => (
        <LinkCard link={link} key={index} />
      ))}
      <h2 className="mainContent__title">Advanced Statistics</h2>
      <p className="mainContent__para">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="mainContent__cards">
        <Cards />
      </div>
    </div>
  )
}

MainContent.propTypes = {
  callingAPI: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string.isRequired,
  setLink: PropTypes.func
}

export default MainContent
