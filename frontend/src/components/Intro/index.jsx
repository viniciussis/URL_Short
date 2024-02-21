import './Intro.scss'
import Button from '../Button'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__banner">
        <img
          className="banner_img"
          src="src\assets\images\illustration-working.svg"
          alt="Banner"
        />
      </div>
      <div className="intro__info">
        <h1 className="info__title">More than just shorter links</h1>
        <p className="info__para">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button />
      </div>
    </div>
  )
}

export default Intro
