import './LinkCard.scss'
import PropType from 'prop-types'

const LinkCard = ({ link }) => {
  return (
    <div className="cardContainer">
      <div className="cardContainer__userLink">
        <p className='userLink'>{link.userLink}</p>
      </div>
      <div className="cardContainer__shortLink">
        <p className="shortLink">{link.shortLink}</p>
        <button className="shortLink__copyButton">Copy</button>
      </div>
    </div>
  )
}

export default LinkCard
