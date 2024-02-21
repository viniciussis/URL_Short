import { useState } from 'react'
import './LinkCard.scss'
import PropTypes from 'prop-types'

const LinkCard = ({ link }) => {
  const [copiedLink, setCopiedLink] = useState(false)

  const onCopying = async () => {
    setCopiedLink(true) 
    try {
      await navigator.clipboard.writeText(link.shortLink)
    } catch (e) {
      console.log(e.message)
    }
    setTimeout(() => {
      setCopiedLink(false)
    }, 4000)
  }
  return (
    <div className="cardContainer">
      <div className="cardContainer__userLink">
        <p className="userLink">{link.userLink}</p>
      </div>
      <div className="cardContainer__shortLink">
        <p className="shortLink">{link.shortLink}</p>
        {!copiedLink ? (
          <button onClick={onCopying} className="shortLink__button">
            Copy
          </button>
        ) : (
          <button onClick={onCopying} className="shortLink__button--copied">
            Copied!
          </button>
        )}
      </div>
    </div>
  )
}

LinkCard.propTypes = {
  link: PropTypes.object.isRequired
}

export default LinkCard
