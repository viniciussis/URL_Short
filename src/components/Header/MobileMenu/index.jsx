import { useState } from 'react'
import './MobileMenu.scss'

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div className="menuToggle">
        <button className="menuToggle__button" onClick={openMenu}>
          <img
            className="button__icon"
            src="src\assets\icons\ic--outline-menu.svg"
            alt="Menu Icon"
          />
        </button>
      </div>
      {menuOpen && (
        <nav className="menuBar">
          <div className="menuBar__options">
            <button className="__links">Features</button>
            <button className="__links">Pricing</button>
            <button className="__links">Resourses</button>
          </div>
          <div className="menuBar__divider" />
          <div className="menuBar__login">
            <button className="__links">Login</button>
            <button className="__links __links--colorful">Sign Up</button>
          </div>
        </nav>
      )}
    </>
  )
}

export default MobileMenu
