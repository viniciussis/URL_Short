import './Cards.scss'

const Cards = () => {
  return (
    <>
      <div className="card">
        <div className="card__circle">
          <img
            src="src\assets\images\icon-brand-recognition.svg"
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
            src="src\assets\images\icon-detailed-records.svg"
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
            src="src\assets\images\icon-fully-customizable.svg"
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
