import './Header.scss'
import MobileMenu from './MobileMenu'
import DesktopMenu from './DesktopMenu'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="src\assets\images\logo.svg" alt="Logo" />
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
