import { useState } from 'react'
import './Header.scss'
import MobileMenu from './MobileMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="header">
      <div className="header__logo">
        <img src="src\assets\images\logo.svg" alt="Logo" />
      </div>
      <div className="header__menu">
        <button className="menu__button" onClick={openMenu}>
          <img
            className="button__icon"
            src="src\assets\icons\ic--outline-menu.svg"
            alt="Menu Icon"
          />
        </button>
      </div>
      {menuOpen && <MobileMenu/> }
    </header>
  )
}

export default Header
