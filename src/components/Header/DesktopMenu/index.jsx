import './DesktopMenu.scss'

const DesktopMenu = () => {
  return (
    <div className="menu">
      <nav className="menu__nav">
        <a className="__option" href="/">
          Features
        </a>
        <a className="__option" href="/">
          Pricing
        </a>
        <a className="__option" href="/">
          Resources
        </a>
      </nav>
      <div className="menu__login">
        <a className="__option" href="/">
          Login
        </a>
        <a className="__option __option--colorful" href="/">
          Sign Up
        </a>
      </div>
    </div>
  )
}

export default DesktopMenu
