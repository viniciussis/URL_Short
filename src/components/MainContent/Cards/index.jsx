import './Cards.scss'
import brandRecognition from '../../../assets/images/icon-brand-recognition.svg'
import detailedRecords from '../../../assets/images/icon-detailed-records.svg'
import fullyCustomizeble from '../../../assets/images/icon-fully-customizable.svg'

const Cards = () => {
  return (
    <>
      <div className="card">
        <div className="card__circle">
          <img
            src={brandRecognition}
            className="circle__icon"
            alt="A graph icon"
          />
        </div>
        <h1 className="card__title">Brand Recognition</h1>
        <p className="card__para">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
      </div>
      <div className="card card--down">
        <div className="card__circle">
          <img
            src={detailedRecords}
            className="circle__icon"
            alt="A velocimeter icon"
          />
        </div>
        <h1 className="card__title">Detailed Records</h1>
        <p className="card__para">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      <div className="card card--doubleDown">
        <div className="card__circle">
          <img
            src={fullyCustomizeble}
            className="circle__icon"
            alt="A icon with tree pencils"
          />
        </div>
        <h1 className="card__title">Fully Customizable</h1>
        <p className="card__para">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
      <div className="colorfulLine" />
    </>
  )
}

export default Cards
