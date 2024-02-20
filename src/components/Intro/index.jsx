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
      <h1 className="intro__title">More than just shorter links</h1>
      <p className="intro__para">
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>
      <Button />
    </div>
  )
}

export default Intro
