import './Intro.scss'
import Button from '../Button'
import banner from '../../assets/images/illustration-working.svg'

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__banner">
        <img
          className="banner_img"
          src={banner}
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
