import { useState } from 'react'
import './LinkCard.scss'
import PropType from 'prop-types'

const LinkCard = ({ link }) => {
  const [copiedLink, setCopiedLink] = useState(false)

  const onCopying = () => {
    setCopiedLink(true)
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

export default LinkCard
