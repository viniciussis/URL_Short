import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="src\assets\images\logo.svg" alt="Logo" />
      </div>
      <div className="header__menu">
        <button className='menu__button'>
          <img className='button__icon' src="src\assets\icons\ic--outline-menu.svg" alt="Menu Icon" />
        </button>
      </div>
    </header>
  )
}

export default Header
