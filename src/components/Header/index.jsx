import './Header.scss'
import logo from '../../assets/images/logo.svg'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='header__desktop'>
        <DesktopMenu />
      </div>
      <div className='header__mobile'>
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
